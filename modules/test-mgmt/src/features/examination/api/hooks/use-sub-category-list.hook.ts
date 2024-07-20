import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';
import { fetchSubCategoryListRequest } from '../queries';

type QueryFnType = typeof fetchSubCategoryListRequest;
type IParamProps = {
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useSubCategoryList = (paramProps?: IParamProps) => {
  const { config } = paramProps || {};
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['sub-category', 'list'],
    queryFn: () => fetchSubCategoryListRequest(),
    select: (result) => result.data,
    ...config,
  });
};
