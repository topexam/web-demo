import { useEffect } from 'react';
import { Box, Button, HStack, Icon, Spacer, Tag, Text } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { RiDeleteBinFill, RiSave2Fill } from 'react-icons/ri';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  IQuestionOption,
  IQuestionAnswer,
  IQuestionWithAnswer,
  EQuestionType,
} from '@topexam/web.lib.foundation';

import {
  useRemoveQuestion,
  useUpdateQuestion,
  questionAnswerItemAtomFamily,
} from '@/features/examination';

import {
  QuestionTypeFormItem,
  QuestionOptionListFormItem,
  QuestionAnswerFormItem,
  QuestionContentFormItem,
  QUESTION_ANSWER_FORM_ITEM_NAME,
} from './form-item';

type Props = {
  item: IQuestionWithAnswer;
  hasBorder?: boolean;
  index: number;
};

export type IFormValues = {
  title: string;
  type: EQuestionType;
  options: IQuestionOption[];
  answers: IQuestionAnswer;
};

const formSchema = yup.object().shape({
  title: yup.string().required(),
  type: yup.string().oneOf(Object.values(EQuestionType)).required(),
  options: yup.array().of(
    yup.object().shape({
      title: yup.string().required(),
      content: yup.string().required(),
      id: yup.string(),
    })
  ),
  answers: yup.object().shape({
    options: yup.array().of(yup.string()).min(0).required(),
    explain: yup.string(),
    id: yup.string(),
  }),
});

export const QuestionItem = ({ item, index, hasBorder = true }: Props) => {
  const formMethods = useForm<IFormValues>({
    resolver: yupResolver(formSchema),
    reValidateMode: 'onBlur',
  });
  const setQuestionAnswerItem = useSetRecoilState(questionAnswerItemAtomFamily(item._id));
  const updateQuestionMutation = useUpdateQuestion();
  const removeQuestionMutation = useRemoveQuestion();

  useEffect(() => {
    formMethods.reset({
      title: item.title,
      type: item.type,
      options: item.options,
      answers: item.answers,
    });
  }, [item, formMethods]);

  useEffect(() => {
    setQuestionAnswerItem({
      ...item?.answers,
      question_id: item?._id,
    });
  }, [item, setQuestionAnswerItem]);

  const answersValue = formMethods.watch(QUESTION_ANSWER_FORM_ITEM_NAME);
  useEffect(() => {
    setQuestionAnswerItem((value: any) => ({
      ...value,
      options: answersValue?.options || [],
    }));
  }, [answersValue, setQuestionAnswerItem]);

  const _handleSave: SubmitHandler<IFormValues> = (value) => {
    updateQuestionMutation.mutate({
      examinationId: item.examination_id,
      questionId: item._id,
      payload: {
        title: value.title,
        question_type: value.type,
        options: value.options.map((opt: IQuestionOption) => ({
          title: opt.title,
          content: opt.content,
        })),
        answers: {
          options: value.answers.options,
          explain: value.answers.explain,
        },
        question_group_id: item.question_group_id,
        prev: item.prev || undefined,
        next: item.next || undefined,
      },
    });
  };

  const _handleRemove = () => {
    removeQuestionMutation.mutate({ examinationId: item.examination_id, questionId: item._id });
  };

  return (
    <FormProvider {...formMethods}>
      <Box borderWidth={hasBorder ? '1px' : '0px'} borderRadius="md" p={3} bg="gray.50">
        <HStack spacing={3}>
          <Text fontSize="md" fontWeight="500">
            #Question {`${index + 1}`.padStart(2, '0')}
          </Text>
          <QuestionTypeFormItem />
          <Spacer />
          {!!Object.keys(formMethods.formState.errors).length && (
            <Tag size="sm" fontSize="10px" colorScheme="red" fontWeight="500">
              INCOMPLETE
            </Tag>
          )}
          <Button
            leftIcon={<Icon as={RiDeleteBinFill} boxSize={4} />}
            size="sm"
            colorScheme="red"
            variant="outline"
            isLoading={removeQuestionMutation.isPending}
            onClick={_handleRemove}
          >
            Delete
          </Button>
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<Icon as={RiSave2Fill} boxSize={4} />}
            isLoading={updateQuestionMutation.isPending}
            isDisabled={removeQuestionMutation.isPending}
            onClick={formMethods.handleSubmit(_handleSave)}
          >
            Save
          </Button>
        </HStack>
        <QuestionContentFormItem />
        <QuestionOptionListFormItem />
        <QuestionAnswerFormItem />
      </Box>
    </FormProvider>
  );
};
