import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  submissionId: string | null;
  payload: {
    user_answers?: { options: string[]; question: string }[];
  };
};

export const submitExaminationResultRequest = (props: IParamProps) => {
  if (!props.submissionId) throw new Error('submissionId must not empty!');

  return MainNetworkAccess.Post(
    `svc.test-taking/examination:submit-examination/${props.submissionId}`,
    { data: props.payload }
  );
};
