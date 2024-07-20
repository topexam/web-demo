import * as qs from 'qs';
import { ICommonQueryResponse, ICommonQueryParamsRequest } from '@topexam/web.lib.network';
import { ICategory } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type Props = ICommonQueryParamsRequest;

export const fetchCategoryListRequest = async (
  props?: Props
): Promise<ICommonQueryResponse<ICategory[]>> => {
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<ICategory[]>>(
    `svc.base/category/list`,
    {
      params: {
        filter: qs.stringify(props?.filter ?? {}),
        sort: props?.sort,
        page: props?.pagination?.page || 1,
        per_page: props?.pagination?.per_page || 10,
      },
    }
  );
  return requestRes.data;
};
