import { useCustomQuery, QueryConfig } from '@topexam/web.lib.util';

import { fetchTagItemRequest } from '../queries';

type QueryFnType = typeof fetchTagItemRequest;
type IParamProps = {
  tagId: string | null;
  config?: QueryConfig<QueryFnType>;
};

export const useTagItem = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType>({
    queryKey: ['tag', 'item', rest],
    queryFn: () => fetchTagItemRequest(rest),
    enabled: !!rest.tagId,
    ...config,
  });
};
