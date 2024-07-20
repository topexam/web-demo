import { useCustomQuery, QueryConfig } from '@topexam/web.lib.util';

import { fetchExaminationItemRequest } from '../queries';

type QueryFnType = typeof fetchExaminationItemRequest;
type IParamProps = {
  examinationId: string | null;
  config?: QueryConfig<QueryFnType>;
};

export const useExaminationItem = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType>({
    queryKey: ['examination', 'item', rest],
    queryFn: () => fetchExaminationItemRequest(rest),
    enabled: !!rest.examinationId,
    ...config,
  });
};
