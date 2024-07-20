import { MainNetworkAccess } from '@/lib';

type MutationDataType = {
  examinationId: string;
};

const requestViewAnswerRequest = async ({ examinationId }: MutationDataType) => {
  return MainNetworkAccess.Update(
    `svc.test-taking/examination:request-view-answer/${examinationId}`
  );
};

export { requestViewAnswerRequest };
