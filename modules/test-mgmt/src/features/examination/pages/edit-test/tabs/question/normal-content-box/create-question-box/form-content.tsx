import { ModalBody, HStack, ModalFooter, Button } from '@chakra-ui/react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { IQuestion } from '@topexam/web.lib.foundation';

import { useCreateQuestion } from '@/features/examination';
import { IPageRouteParams } from '@/types';
import { QuestionTypeFormItem } from './form-item';
import { FormWrapper } from './form-wrapper';

enum EQuestionType {
  SECTION = 'question_group',
  QUESTION = 'question',
}

type IFormValues = {
  question_type: EQuestionType;
  question_group: string;
};

const formSchema = yup.object().shape({
  question_type: yup.string().required(),
  question_group: yup.string().required(),
});

type Props = {
  prevQuestion?: IQuestion | null;
  nextQuestion?: IQuestion | null;
  onClose: () => void;
};

const FormContent = ({ onClose, prevQuestion, nextQuestion }: Props) => {
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;

  const createQuestionMutation = useCreateQuestion();

  const formMethods = useForm<IFormValues>({
    resolver: yupResolver(formSchema),
    reValidateMode: 'onBlur',
    defaultValues: {
      question_type: EQuestionType.QUESTION,
    },
  });

  const _handleCreate: SubmitHandler<IFormValues> = (value) => {
    if (value.question_type === EQuestionType.QUESTION) {
      createQuestionMutation.mutate(
        {
          examinationId: examinationId,
          payload: {
            question_group_id: value.question_group,
            prev: prevQuestion?._id,
            next: nextQuestion?._id,
          },
        },
        {
          onSuccess: () => onClose(),
        }
      );
    }
  };

  return (
    <FormProvider {...formMethods}>
      <ModalBody>
        <QuestionTypeFormItem />
        <FormWrapper />
      </ModalBody>
      <ModalFooter>
        <HStack spacing={3}>
          <Button variant="ghost" colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={formMethods.handleSubmit(_handleCreate)}
            isLoading={createQuestionMutation.isPending}
          >
            Create
          </Button>
        </HStack>
      </ModalFooter>
    </FormProvider>
  );
};

export default FormContent;
