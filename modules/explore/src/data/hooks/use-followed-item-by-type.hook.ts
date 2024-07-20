import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { EFollowItemType } from '@/enums';
import { fetchFollowedItemByTypeRequest } from '../queries';

type QueryFnType = typeof fetchFollowedItemByTypeRequest;
type IParamProps = {
  itemType: EFollowItemType;
  itemId: string | null;
  config?: QueryConfig<QueryFnType>;
};

export const useFollowedItemByType = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['followed', 'item', 'by-type', rest],
    queryFn: () => fetchFollowedItemByTypeRequest(rest),
    enabled: !!rest.itemId,
    ...config,
  });
};
