import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { fetchQuestionListByExaminationRequest } from '../queries';

type QueryFnType = typeof fetchQuestionListByExaminationRequest;
type IParamProps = {
  examinationId: string | null;
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useQuestionListByExamination = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['question', 'list', rest],
    queryFn: () => fetchQuestionListByExaminationRequest(rest),
    enabled: !!rest.examinationId,
    select: (result) => result.data,
    ...config,
  });
};
