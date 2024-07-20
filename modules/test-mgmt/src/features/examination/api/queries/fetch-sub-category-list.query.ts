import * as qs from 'qs';
import { ICommonQueryResponse, ICommonQueryParamsRequest } from '@topexam/web.lib.network';
import { ISubCategory } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type Props = ICommonQueryParamsRequest;

export const fetchSubCategoryListRequest = async (
  props?: Props
): Promise<ICommonQueryResponse<ISubCategory[]>> => {
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<ISubCategory[]>>(
    `svc.base/sub-category/list`,
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
