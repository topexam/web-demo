import { EQuestionType, IQuestionAnswer, IQuestionOption } from '@topexam/web.lib.foundation';
import { MainNetworkAccess } from '@/lib';

type VariableProps = {
  examinationId?: string;
  questionId: string;
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

export const updateQuestionRequest = (variables: VariableProps) => {
  const { examinationId, questionId, payload } = variables;
  if (!examinationId) throw new Error('examinationId must not empty!');

  return MainNetworkAccess.Update(
    `svc.examination/question:update-question/${examinationId}/${questionId}`,
    { data: payload }
  );
};
