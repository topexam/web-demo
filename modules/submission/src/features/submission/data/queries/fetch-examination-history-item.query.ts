import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { ISubmission } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  submissionId: string | null;
};

export const fetchSubmissionItemRequest = async (props: IParamProps): Promise<ISubmission> => {
  if (!props.submissionId) throw new Error('submissionId must not empty!');
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<ISubmission>>(
    `svc.test-taking/examination-history/item/${props.submissionId}`
  );
  return requestRes.data.data;
};
