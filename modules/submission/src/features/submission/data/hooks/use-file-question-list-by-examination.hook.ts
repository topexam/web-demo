import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { fetchFileQuestionListByExaminationRequest } from '../queries';

type QueryFnType = typeof fetchFileQuestionListByExaminationRequest;
type IParamProps = {
  examinationId: string | null;
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useFileQuestionListByExamination = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['file-question', 'list', rest],
    queryFn: () => fetchFileQuestionListByExaminationRequest(rest),
    enabled: !!rest.examinationId,
    select: (result) => result.data,
    ...config,
  });
};
