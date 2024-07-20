import { ICommonMutationResponse } from '@topexam/web.lib.network';
import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  examinationId: string | null;
};

export const takeExaminationRequest = async (
  props: IParamProps
): Promise<ICommonMutationResponse> => {
  if (!props.examinationId) throw new Error('examinationId must not empty!');

  const resData = await MainNetworkAccess.Post<ICommonMutationResponse>(
    `svc.submission/examination:take-examination/${props.examinationId}`
  );

  return resData.data;
};
