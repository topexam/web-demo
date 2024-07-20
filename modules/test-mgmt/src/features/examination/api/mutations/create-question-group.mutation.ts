import { MainNetworkAccess } from '@/lib';

type VariableProps = {
  examinationId: string;
  payload: {
    content?: string;
  };
};

export const createQuestionGroupRequest = (variables: VariableProps) => {
  const { examinationId, payload } = variables;
  return MainNetworkAccess.Update(
    `svc.examination/question-group:create-question-group/${examinationId}`,
    {
      data: payload,
    }
  );
};
