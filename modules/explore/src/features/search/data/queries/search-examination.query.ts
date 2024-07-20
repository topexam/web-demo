import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { IExamination } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  txt: string;
};

export const searchExaminationRequest = async (
  paramProps: IParamProps
): Promise<ICommonQueryResponse<IExamination[]>> => {
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<IExamination[]>>(
    'svc.examination/examination/list',
    {
      params: { q: paramProps.txt },
    }
  );

  return requestRes.data;
};
