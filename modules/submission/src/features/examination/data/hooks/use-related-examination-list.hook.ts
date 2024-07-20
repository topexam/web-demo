import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { fetchRelatedExaminationListRequest } from '../queries';

type QueryFnType = typeof fetchRelatedExaminationListRequest;
type IParamProps = {
  examinationId: string | null;
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useRelatedExaminationList = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['examination', 'list-related', rest],
    queryFn: () => fetchRelatedExaminationListRequest(rest),
    enabled: !!rest.examinationId,
    select: (result) => result.data,
    ...config,
  });
};
