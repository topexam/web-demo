import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { EFollowItemType } from '@/enums';
import { fetchFollowedListByTypeRequest } from '../queries';

type QueryFnType = typeof fetchFollowedListByTypeRequest;
type IParamProps = {
  itemType: EFollowItemType;
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useFollowedListByType = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['followed', 'list', 'by-type', rest],
    queryFn: () => fetchFollowedListByTypeRequest(rest),
    ...config,
  });
};
