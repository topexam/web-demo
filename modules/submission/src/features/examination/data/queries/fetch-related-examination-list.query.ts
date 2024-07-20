import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { IExamination } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  examinationId: string | null;
};

export const fetchRelatedExaminationListRequest = async (
  props: IParamProps
): Promise<ICommonQueryResponse<IExamination[]>> => {
  if (!props.examinationId) throw new Error('examinationId must not empty!');
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<IExamination[]>>(
    `svc.examination/examination/list-related/${props.examinationId}`
  );
  return requestRes.data;
};
