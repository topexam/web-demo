import { useCustomQuery, QueryConfig } from '@topexam/web.lib.util';

import { fetchSubCategoryItemRequest } from '../queries';

type QueryFnType = typeof fetchSubCategoryItemRequest;
type IParamProps = {
  subCategoryId: string | null;
  config?: QueryConfig<QueryFnType>;
};

export const useSubCategoryItem = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType>({
    queryKey: ['sub-category', 'item', rest],
    queryFn: () => fetchSubCategoryItemRequest(rest),
    enabled: !!rest.subCategoryId,
    ...config,
  });
};
