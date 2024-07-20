import { useInfiniteQuery } from '@tanstack/react-query';
import { ExtractFnReturnType } from '@topexam/web.lib.util';

import { searchUserRequest } from '../queries';

type QueryFnType = typeof searchUserRequest;
type IParamProps = {
  txt: string;
};

export const useSearchUser = (paramProps: IParamProps) => {
  return useInfiniteQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['search', 'user', paramProps],
    queryFn: async () => await searchUserRequest(paramProps),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.meta.nextId,
    enabled: !!paramProps.txt,
  });
};
