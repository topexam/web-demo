import { IQuestionAnswer, IQuestionOption } from '@topexam/web.lib.foundation';
import { MainNetworkAccess } from '@/lib';

type VariableProps = {
  examinationId: string | null;
  payload: {
    questions: {
      options: IQuestionOption[];
      answers: IQuestionAnswer;
    }[];
  };
};

export const createBulkQuestionRequest = (variables: VariableProps) => {
  const { examinationId, payload } = variables;
  if (!examinationId) throw new Error('examinationId must not empty!');

  return MainNetworkAccess.Post(`svc.examination/question:create-bulk-question/${examinationId}`, {
    data: payload,
  });
};
