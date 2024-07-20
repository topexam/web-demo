import * as qs from 'qs';
import { ICommonQueryParamsRequest, ICommonQueryResponse } from '@topexam/web.lib.network';
import { ITag } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';

type Props = ICommonQueryParamsRequest;

export const fetchTagListRequest = async (props?: Props): Promise<ICommonQueryResponse<ITag[]>> => {
  const requestRes = await MainNetworkAccess.Get<ICommonQueryResponse<ITag[]>>(
    `svc.base/tag/list`,
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
