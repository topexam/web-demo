import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { IUser } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type IParamProps = {
  txt: string;
};

export const searchUserRequest = async (
  paramProps: IParamProps
): Promise<ICommonQueryResponse<IUser[]>> => {
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<IUser[]>>(
    'svc.user/user/list',
    {
      params: { q: paramProps.txt },
    }
  );

  return requestRes.data;
};
