import { IAuthUser } from '@topexam/web.lib.foundation';

import { Auth0NetworkAccess } from '@/lib';

type IParamProps = {
  auth0Id: string | null;
};

export const fetchAuth0userDetailsRequest = async (props: IParamProps): Promise<IAuthUser> => {
  if (!props.auth0Id) throw new Error('auth0Id must not null');

  const requestRes = await Auth0NetworkAccess.Get<IAuthUser>(`users/${props.auth0Id}`);
  return requestRes.data;
};
