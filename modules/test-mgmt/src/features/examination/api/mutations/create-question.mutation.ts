import { EQuestionType, IQuestionAnswer, IQuestionOption } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type VariableProps = {
  examinationId: string | null;
  payload: {
    title?: string;
    question_type?: EQuestionType;
    options?: IQuestionOption[];
    answers?: IQuestionAnswer;
    question_group_id: string;
    prev?: string;
    next?: string;
  };
};

export const createQuestionRequest = (variables: VariableProps) => {
  const { examinationId, payload } = variables;
  if (!examinationId) throw new Error('examinationId must not empty!');

  return MainNetworkAccess.Post(`svc.examination/question:create-question/${examinationId}`, {
    data: payload,
  });
};
