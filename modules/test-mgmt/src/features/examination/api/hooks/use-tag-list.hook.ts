import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { fetchTagListRequest } from '../queries';

type QueryFnType = typeof fetchTagListRequest;
type IParamProps = {
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useTagList = (paramProps?: IParamProps) => {
  const { config } = paramProps || {};
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['tag', 'list'],
    queryFn: () => fetchTagListRequest(),
    select: (result) => result.data,
    ...config,
  });
};
