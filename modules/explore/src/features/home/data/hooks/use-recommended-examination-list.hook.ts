import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { fetchRecommendedExaminationListRequest } from '../queries';

type QueryFnType = typeof fetchRecommendedExaminationListRequest;
type IParamProps = {
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useRecommendedExaminationList = (paramProps?: IParamProps) => {
  const { config } = paramProps || {};
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['examination', 'list', 'recommended'],
    queryFn: () => fetchRecommendedExaminationListRequest(),
    select: (result) => result.data,
    ...config,
  });
};
