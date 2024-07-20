import { MainNetworkAccess } from '@/lib';

type VariableProps = {
  examinationId?: string | null;
  questionId: string;
};

export const removeQuestionRequest = (variables: VariableProps) => {
  const { examinationId, questionId } = variables;
  if (!examinationId) throw new Error('examinationId must not empty!');

  return MainNetworkAccess.Delete(
    `svc.examination/question:remove-question/${examinationId}/${questionId}`
  );
};
