import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { fetchSubmissionListByUserRequest } from '../queries';

type QueryFnType = typeof fetchSubmissionListByUserRequest;
type IParamProps = {
  examinationId: string | null;
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useSubmissionListByUser = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['submission', 'list-by-user', rest],
    queryFn: () => fetchSubmissionListByUserRequest(rest),
    enabled: !!rest.examinationId,
    select: (result) => result.data,
    ...config,
  });
};
