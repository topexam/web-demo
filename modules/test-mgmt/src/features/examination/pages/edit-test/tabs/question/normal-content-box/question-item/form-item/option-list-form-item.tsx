import {
  Text,
  Center,
  HStack,
  Icon,
  SimpleGrid,
  IconButton,
  Box,
  FormControl,
} from '@chakra-ui/react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { produce } from 'immer';
import { RiAddBoxFill, RiDeleteBin6Fill } from 'react-icons/ri';
import { WebEditor } from 'chakra-tiptap-editor';

import { QUESTION_ANSWER_FORM_ITEM_NAME } from './answer-form-item';

const QUESTION_OPTION_LIST_FORM_ITEM_NAME = 'options';

export const QuestionOptionListFormItem = () => {
  const { control, setValue, getValues, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: QUESTION_OPTION_LIST_FORM_ITEM_NAME,
  });
  const answersValue = watch(QUESTION_ANSWER_FORM_ITEM_NAME) || { options: [] };

  const _handleToggleAnswer = (optTitle: string) => {
    const nextState = produce(answersValue, (draftState: any) => {
      if (!draftState.options?.includes(optTitle)) {
        console.log(draftState.options);
        draftState.options.push(optTitle);
        draftState.options = draftState.options.sort();
      } else {
        draftState.options = draftState.options.filter((opt: string) => opt !== optTitle);
      }
    });
    setValue(QUESTION_ANSWER_FORM_ITEM_NAME, nextState);
  };

  return (
    <SimpleGrid spacing={2} mt={3} mb={4}>
      {fields?.map((field, idx) => {
        const optTitle = getValues(`${QUESTION_OPTION_LIST_FORM_ITEM_NAME}.${idx}.title`);
        const isAnswer = answersValue?.options?.includes(optTitle);
        const [bgColor, textColor, borderColor] = isAnswer
          ? ['green.50', 'green.500', 'green.300']
          : ['gray.50', 'gray.500', 'gray.300'];
        return (
          <HStack key={field.id} align="baseline">
            <IconButton
              aria-label="Remove"
              icon={<Icon as={RiDeleteBin6Fill} />}
              colorScheme="red"
              variant="ghost"
              rounded="full"
              onClick={() => {
                fields.forEach((_, fieldIdx) => {
                  const optTitle = getValues(
                    `${QUESTION_OPTION_LIST_FORM_ITEM_NAME}.${fieldIdx}.title`
                  );
                  if (answersValue.options?.includes(optTitle)) {
                    _handleToggleAnswer(optTitle);
                  }
                  setValue(
                    `${QUESTION_OPTION_LIST_FORM_ITEM_NAME}.${fieldIdx}.title`,
                    String.fromCharCode(65 + fieldIdx + (idx <= fieldIdx ? -1 : 0))
                  );
                });

                remove(idx);
              }}
            />
            <Center
              borderWidth="1px"
              borderRadius="50%"
              boxSize="32px"
              bg={bgColor}
              color={textColor}
              borderColor={borderColor}
              fontWeight="500"
              cursor="pointer"
              onClick={() => _handleToggleAnswer(optTitle)}
            >
              {optTitle}
            </Center>
            <Box flex={1}>
              <Controller
                name={`${QUESTION_OPTION_LIST_FORM_ITEM_NAME}.${idx}.content`}
                control={control}
                render={({ field }) => {
                  const fieldValue = field.value;
                  return (
                    <FormControl id={`${QUESTION_OPTION_LIST_FORM_ITEM_NAME}.${idx}.content`}>
                      <WebEditor
                        hasToolbar={false}
                        value={{ html: fieldValue }}
                        onChange={(val) => field.onChange(val.html)}
                      />
                    </FormControl>
                  );
                }}
              />
            </Box>
          </HStack>
        );
      })}
      <HStack
        px={4}
        py={3}
        borderWidth={1}
        borderStyle="dashed"
        borderColor="gray.300"
        rounded="base"
        bg="gray.50"
        color="gray.500"
        onClick={() => append({ title: String.fromCharCode(65 + fields.length), content: '' })}
        _hover={{ bg: 'gray.100', cursor: 'pointer' }}
      >
        <Icon as={RiAddBoxFill} boxSize={5} />
        <Text>Add new option</Text>
      </HStack>
    </SimpleGrid>
  );
};
