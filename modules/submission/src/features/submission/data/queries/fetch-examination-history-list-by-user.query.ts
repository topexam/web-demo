import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { ISubmission } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  examinationId: string | null;
};

export const fetchSubmissionListByUserRequest = async (
  props: IParamProps
): Promise<ICommonQueryResponse<ISubmission[]>> => {
  if (!props.examinationId) throw new Error('examinationId must not empty!');
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<ISubmission[]>>(
    `svc.test-taking/examination-history/list-by-user/${props.examinationId}`
  );
  return requestRes.data;
};
