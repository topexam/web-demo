import { useCustomQuery, QueryConfig, ExtractFnReturnType } from '@topexam/web.lib.util';

import { EExaminationResource } from '@/enums';
import { fetchExaminationListRequest } from '../queries';

type QueryFnType = typeof fetchExaminationListRequest;
type IParamProps = {
  resource: EExaminationResource;
  resourceId: string | null;
  config?: QueryConfig<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>;
};

export const useExaminationListByResource = (paramProps: IParamProps) => {
  const { config, ...rest } = paramProps;
  return useCustomQuery<QueryFnType, ExtractFnReturnType<QueryFnType>['data']>({
    queryKey: ['examination', 'list', 'by-resource', rest],
    queryFn: () =>
      fetchExaminationListRequest({
        filter: {
          [`${rest.resource}_id`]: rest.resourceId ?? '',
        },
        q: '',
      }),
    enabled: !!rest.resourceId,
    select: (result) => result.data,
    ...config,
  });
};
