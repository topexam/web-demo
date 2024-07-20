import { useCustomQuery, QueryConfig } from '@topexam/web.lib.util';

import { fetchSubmissionItemRequest } from '../queries';

type QueryFnType = typeof fetchSubmissionItemRequest;
type IParamProps = {
  submissionId: string | null;
  config?: QueryConfig<QueryFnType>;
};

export const useSubmissionItem = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType>({
    queryKey: ['submission', 'item', rest],
    queryFn: () => fetchSubmissionItemRequest(rest),
    enabled: !!rest.submissionId,
    ...config,
  });
};
