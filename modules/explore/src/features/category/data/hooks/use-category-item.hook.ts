import { useCustomQuery, QueryConfig } from '@topexam/web.lib.util';

import { fetchCategoryItemRequest } from '../queries';

type QueryFnType = typeof fetchCategoryItemRequest;
type IParamProps = {
  categoryId: string | null;
  config?: QueryConfig<QueryFnType>;
};

export const useCategoryItem = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType>({
    queryKey: ['category', 'item', rest],
    queryFn: () => fetchCategoryItemRequest(rest),
    ...config,
  });
};
