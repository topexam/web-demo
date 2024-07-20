import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { fetchCategoryListRequest } from '../queries';

type QueryFnType = typeof fetchCategoryListRequest;
type IParamProps = {
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useCategoryList = (paramProps?: IParamProps) => {
  const { config } = paramProps || {};
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['category', 'list'],
    queryFn: () => fetchCategoryListRequest(),
    select: (result) => result.data,
    ...config,
  });
};
