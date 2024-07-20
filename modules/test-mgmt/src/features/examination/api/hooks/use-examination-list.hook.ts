import { ICommonQueryParamsRequest } from '@topexam/web.lib.network';
import { useCustomQuery, ExtractFnReturnType, QueryConfig } from '@topexam/web.lib.util';

import { fetchExaminationListRequest } from '../queries';

type QueryFnType = typeof fetchExaminationListRequest;
type IParamProps = {
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
  requestQueryParams?: ICommonQueryParamsRequest;
};

export const useExaminationList = (paramProps?: IParamProps) => {
  const { config, ...rest } = paramProps || {};
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['examination', 'list', rest],
    queryFn: () => fetchExaminationListRequest(rest.requestQueryParams),
    select: (result) => result.data,
    // onSuccess: (data) =>
    //   data.forEach((it) => queryClient.setQueryData(['examination', 'item', it._id], it)),
    ...config,
  });
};
