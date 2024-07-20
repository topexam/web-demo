import { ICommonQueryResponse } from '@topexam/web.lib.network';
import { ICategory } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

export const fetchCategoryListRequest = async (): Promise<ICommonQueryResponse<ICategory[]>> => {
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<ICategory[]>>(
    `svc.base/category/list`
  );
  return requestRes.data;
};
