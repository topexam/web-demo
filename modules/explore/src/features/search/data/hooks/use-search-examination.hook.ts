import { useInfiniteQuery } from '@tanstack/react-query';
import { ExtractFnReturnType } from '@topexam/web.lib.util';

import { searchExaminationRequest } from '../queries';

type QueryFnType = typeof searchExaminationRequest;
type IParamProps = {
  txt: string;
};

export const useSearchExamination = (paramProps: IParamProps) => {
  return useInfiniteQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['search', 'examination', paramProps],
    queryFn: async () => await searchExaminationRequest(paramProps),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.meta.nextId,
    enabled: !!paramProps.txt,
  });
};
