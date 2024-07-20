import { ICommonQueryParamsRequest } from '@topexam/web.lib.network';
import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';
import { fetchQuestionGroupListRequest } from '../queries';

type QueryFnType = typeof fetchQuestionGroupListRequest;
type IParamProps = {
  examinationId: string | null;
  requestQueryParams?: ICommonQueryParamsRequest;
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useQuestionGroupList = (paramProps?: IParamProps) => {
  const { config, ...rest } = paramProps || { examinationId: null };

  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['question-group', 'list', paramProps],
    queryFn: () =>
      fetchQuestionGroupListRequest({
        examinationId: rest.examinationId || null,
        queryParams: rest.requestQueryParams,
      }),
    select: (result) => result.data,
    // onSuccess: (data) =>
    //   data.forEach((it) => queryClient.setQueryData(['question-group', 'item', it._id], it)),
    enabled: !!rest?.examinationId,
    ...config,
  });
};
