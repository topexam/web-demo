import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';
import { fetchFileQuestionListWithAnswerRequest } from '../queries';

type QueryFnType = typeof fetchFileQuestionListWithAnswerRequest;
type IParamProps = {
  examinationId: string | null;
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useFileQuestionListWithAnswer = (paramProps?: IParamProps) => {
  const { config, ...rest } = paramProps || { examinationId: null };
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['file-question', 'list', 'with-answer', rest],
    queryFn: () => fetchFileQuestionListWithAnswerRequest(rest.examinationId),
    ...config,
  });
};
