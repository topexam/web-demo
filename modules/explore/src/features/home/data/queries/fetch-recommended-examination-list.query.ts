import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { IExamination } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

export const fetchRecommendedExaminationListRequest = async (): Promise<
  ICommonQueryResponse<IExamination[]>
> => {
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<IExamination[]>>(
    `svc.examination/examination/list-recommended`
  );
  return requestRes.data;
};
