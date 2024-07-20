import { useCustomQuery, QueryConfig } from '@topexam/web.lib.util';

import { fetchAuth0userDetailsRequest } from '../queries';

type QueryFnType = typeof fetchAuth0userDetailsRequest;
type IParamProps = {
  auth0Id: string | null;
  accessToken: string | null;
  accessTokenAPI?: string | null;
  config?: QueryConfig<QueryFnType>;
};

export const useAuth0UserDetails = (paramProps?: IParamProps) => {
  const { config, ...paramRest } = paramProps || { auth0Id: null };
  return useCustomQuery<QueryFnType>({
    queryKey: ['auth0-user-details', paramRest],
    queryFn: () => fetchAuth0userDetailsRequest(paramRest),
    enabled: !!paramRest.auth0Id && !!config?.enabled,
    // ...config,
  });
};
