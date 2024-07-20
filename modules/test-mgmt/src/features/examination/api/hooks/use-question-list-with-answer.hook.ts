import { ICommonQueryParamsRequest } from '@topexam/web.lib.network';
import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { fetchQuestionListWithAnswerRequest } from '../queries';

type QueryFnType = typeof fetchQuestionListWithAnswerRequest;
type IParamProps = {
  examinationId: string | null;
  requestQueryParams?: ICommonQueryParamsRequest;
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useQuestionListWithAnswer = (paramProps?: IParamProps) => {
  const { config, ...rest } = paramProps || { examinationId: null };

  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['question', 'list', 'with-answer', rest],
    queryFn: () =>
      fetchQuestionListWithAnswerRequest({
        examinationId: rest?.examinationId || null,
        queryParams: rest?.requestQueryParams,
      }),
    select: (result) => result.data,
    // onSuccess: (data) =>
    //   data.forEach((it) =>
    //     queryClient.setQueryData(['question', 'item', it._id, 'with-answer'], it)
    //   ),
    enabled: !!rest?.examinationId,
    ...config,
  });
};
