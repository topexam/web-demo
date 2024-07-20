import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { IExamination } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  examinationId: string | null;
};

export const fetchExaminationItemRequest = async (props: IParamProps): Promise<IExamination> => {
  if (!props.examinationId) throw new Error('examinationId must not empty!');
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<IExamination>>(
    `svc.examination/examination/item/${props.examinationId}`
  );
  return requestRes.data.data;
};
