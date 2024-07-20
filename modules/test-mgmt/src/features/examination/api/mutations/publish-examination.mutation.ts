import { MainNetworkAccess } from '@/lib';

type VariableProps = {
  examinationId: string | null;
};

export const publishExaminationRequest = (variables: VariableProps) => {
  const { examinationId } = variables;
  if (!examinationId) throw new Error('examinationId must not empty!');

  return MainNetworkAccess.Post(`svc.examination/examination:publish-examination/${examinationId}`);
};
