import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { IQuestion } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  examinationId: string | null;
};

export const fetchFileQuestionListByExaminationRequest = async (
  props: IParamProps
): Promise<ICommonQueryResponse<IQuestion[]>> => {
  if (!props.examinationId) throw new Error('examinationId must not empty!');
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<IQuestion[]>>(
    `svc.examination/file-question/list/${props.examinationId}`
  );
  return requestRes.data;
};
