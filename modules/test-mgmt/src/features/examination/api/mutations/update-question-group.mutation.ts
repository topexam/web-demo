import { MainNetworkAccess } from '@/lib';

type VariableProps = {
  examinationId: string;
  questionGroupId: string;
  payload: {
    content?: string;
  };
};

export const updateQuestionGroupRequest = (variables: VariableProps) => {
  const { examinationId, questionGroupId, payload } = variables;
  return MainNetworkAccess.Update(
    `svc.examination/question-group:create-question-group/${examinationId}/${questionGroupId}`,
    {
      data: payload,
    }
  );
};
