import {
  Button,
  IconButton,
  Td,
  Tooltip,
  Tr,
  Icon,
  Link,
  Box,
  Circle,
  HStack,
  Text,
  Spacer,
  Table,
  Tbody,
} from '@chakra-ui/react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { HiExclamation, HiTrash } from 'react-icons/hi';
import { RiCloseCircleFill, RiAddCircleFill } from 'react-icons/ri';
import { genArrayFromNumber } from '@topexam/web.lib.util';

import { FormValues } from '../content-box';
import UploadBox from './upload-box';
import AnswerExplain from './answer-explain';
import EmptyBox from './empty-box';
import AddQuestionBox from './add-question-box';

export const ANSWERS_FORM_ITEM = 'answers';

export const AnswersFormItem = () => {
  const { control } = useFormContext<FormValues>();
  const fieldArrayMethods = useFieldArray({
    control,
    name: ANSWERS_FORM_ITEM,
    shouldUnregister: true,
  });
  const { fields, append, remove } = fieldArrayMethods;

  const _handleAddQuestion = () => {
    append({
      correct_options: [],
      option_num: 4,
      explain: null,
    });
  };

  const _renderRowList = () => {
    return fields.map((quesField, index) => (
      <Controller
        key={quesField?.id}
        control={control}
        name={`${ANSWERS_FORM_ITEM}.${index}`}
        defaultValue={quesField}
        render={({ field, fieldState }) => {
          const fieldValue = field.value;
          const fieldError = fieldState.error;
          const fieldErrorMsg = (fieldError as any)?.correct_options?.message;
          return (
            <Tr>
              <Td w="100%" px={4} py={2}>
                <HStack>
                  <IconButton
                    icon={<Icon as={HiTrash} boxSize={4} color="red.400" />}
                    size="sm"
                    aria-label="Remove question"
                    variant="ghost"
                    colorScheme="red"
                    rounded="full"
                    onClick={() => remove(index)}
                  />
                  <Text fontSize="sm">Question {index + 1}</Text>
                  {!!fieldErrorMsg && (
                    <Tooltip
                      label={fieldErrorMsg}
                      color="white"
                      bg="red.500"
                      isDisabled={!fieldErrorMsg}
                    >
                      <Circle>
                        <Icon as={HiExclamation} color="red.500" />
                      </Circle>
                    </Tooltip>
                  )}
                </HStack>
              </Td>
              <Td px={4} py={1} colSpan={2}>
                <HStack>
                  {genArrayFromNumber(fieldValue?.option_num || 0).map((opt) => {
                    const optTitle = String.fromCharCode(65 + opt);
                    const isExisted = !!fieldValue.correct_options?.includes(optTitle);
                    return (
                      <Button
                        size="sm"
                        key={opt}
                        onClick={() => {
                          let newCorrectOpts = [];
                          if (isExisted)
                            newCorrectOpts = fieldValue.correct_options.filter(
                              (it) => it !== optTitle
                            );
                          else newCorrectOpts = [...fieldValue.correct_options, optTitle];
                          field.onChange({ ...fieldValue, correct_options: newCorrectOpts });
                        }}
                        colorScheme={isExisted ? 'green' : 'gray'}
                      >
                        {optTitle}
                      </Button>
                    );
                  })}
                  <Spacer />
                  <IconButton
                    icon={<Icon as={RiCloseCircleFill} color="red.400" boxSize={4} />}
                    size="sm"
                    aria-label="Remove option"
                    variant="ghost"
                    colorScheme="red"
                    borderWidth={1}
                    borderStyle="dashed"
                    borderColor="red.300"
                    isDisabled={fieldValue?.option_num <= 2}
                    onClick={() => {
                      const newCorrectOpts = fieldValue.correct_options.filter(
                        (it) => it !== String.fromCharCode(65 + fieldValue.option_num)
                      );
                      field.onChange({
                        ...fieldValue,
                        correct_options: newCorrectOpts,
                        option_num: fieldValue.option_num - 1,
                      });
                    }}
                  />
                  <IconButton
                    icon={<Icon as={RiAddCircleFill} color="green.400" boxSize={4} />}
                    size="sm"
                    aria-label="Add option"
                    variant="ghost"
                    colorScheme="green"
                    borderWidth={1}
                    borderStyle="dashed"
                    borderColor="green.300"
                    isDisabled={fieldValue?.option_num >= 6}
                    onClick={() => {
                      const newCorrectOpts = fieldValue.correct_options.filter(
                        (it) => it !== String.fromCharCode(65 + fieldValue.option_num)
                      );
                      field.onChange({
                        ...fieldValue,
                        correct_options: newCorrectOpts,
                        option_num: fieldValue.option_num + 1,
                      });
                    }}
                  />
                  <AnswerExplain name={`${ANSWERS_FORM_ITEM}.${index}.explain`} />
                </HStack>
              </Td>
            </Tr>
          );
        }}
      />
    ));
  };

  const _renderAnswerTable = () => {
    if (!fields.length) return <EmptyBox onClick={_handleAddQuestion} />;
    return (
      <Box py={4}>
        <Table>
          <Tbody>
            {_renderRowList()}
            <AddQuestionBox onClick={_handleAddQuestion} />
          </Tbody>
        </Table>
      </Box>
    );
  };

  return (
    <Box mt={2}>
      <HStack px={4} py={3}>
        <HStack flex={1}>
          <Text color="gray.500">
            You can add answers automatically by upload the test answers file in excel format.{' '}
            <Link color="blue.500">File sample</Link>
          </Text>
        </HStack>
        <UploadBox fieldArrayMethods={fieldArrayMethods} />
      </HStack>
      {_renderAnswerTable()}
    </Box>
  );
};
