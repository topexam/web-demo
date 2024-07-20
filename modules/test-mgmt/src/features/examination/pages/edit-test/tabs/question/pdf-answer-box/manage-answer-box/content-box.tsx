import { Button, ButtonGroup } from '@chakra-ui/button';
import { DrawerBody, DrawerFooter } from '@chakra-ui/react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import { IPageRouteParams } from '@/types';
import {
  useCreateBulkQuestionMutation,
  useFileQuestionListWithAnswer,
  IQuestionAnswer,
} from '@/features/examination';
import { AnswersFormItem } from './answer-form-item';
import { genArrayFromNumber } from '@topexam/web.lib.util';

export type FormValues = {
  answers: IQuestionAnswer[];
};

const formSchema = yup.object().shape({
  answers: yup
    .array(
      yup.object({
        correct_options: yup.array(yup.string()).min(1).required(),
        option_num: yup.number().required(),
      })
    )
    .min(1)
    .required(),
});

type Props = {
  onClose: () => void;
};

const ContentBox = ({ onClose }: Props) => {
  const queryClient = useQueryClient();
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;

  const formMethods = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });
  const { formState } = formMethods;

  const fileQuestionListQuery = useFileQuestionListWithAnswer({ examinationId });
  const createBulkQuestionMutation = useCreateBulkQuestionMutation();

  useEffect(() => {
    const fileQuestionList = fileQuestionListQuery.data;

    if (fileQuestionList) {
      const questionWithAnswerList = fileQuestionList.map<IQuestionAnswer>((it) => ({
        correct_options: it.answers.options,
        explain: it.answers.explain || null,
        option_num: it.options.length,
      }));

      formMethods.reset({ answers: questionWithAnswerList });
    }
  }, [fileQuestionListQuery.data, formMethods]);

  const _handleCreate: SubmitHandler<FormValues> = (value) => {
    const questionList = value.answers.map((it) => {
      return {
        options:
          genArrayFromNumber(it.option_num).map((opt) => ({
            title: String.fromCharCode(65 + opt),
            content: 'Content',
          })) || [],
        answers: {
          options: it.correct_options || [],
          explain: it.explain,
        },
      };
    });

    createBulkQuestionMutation.mutate(
      {
        examinationId,
        payload: { questions: questionList },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['file-question', 'list'] });
          onClose();
        },
      }
    );
  };

  return (
    <FormProvider {...formMethods}>
      <DrawerBody p={0}>
        <AnswersFormItem />
      </DrawerBody>
      <DrawerFooter borderTopWidth={1} py={3}>
        <ButtonGroup size="sm" spacing={3}>
          <Button variant="ghost" colorScheme="blackAlpha" onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="green"
            isDisabled={!formState.isDirty || fileQuestionListQuery.isLoading}
            onClick={formMethods.handleSubmit(_handleCreate)}
            isLoading={createBulkQuestionMutation.isPending}
          >
            Save
          </Button>
        </ButtonGroup>
      </DrawerFooter>
    </FormProvider>
  );
};

export default ContentBox;
