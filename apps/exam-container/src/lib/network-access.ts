import { RestNetworkAccess } from '@topexam/web.lib.network';
import { K_LS_ACCESS_TOKEN } from '@topexam/web.lib.util';

import { API_URL, AUTH0_API_URL } from '@/config';

export const MainNetworkAccess = new RestNetworkAccess('main', API_URL, {
  getAccessTokenFn: () => localStorage.getItem(K_LS_ACCESS_TOKEN) ?? '',
});
export const FileNetworkAccess = new RestNetworkAccess('file', '', {
  getAccessTokenFn: () => localStorage.getItem(K_LS_ACCESS_TOKEN) ?? '',
});
export const Auth0NetworkAccess = new RestNetworkAccess('auth0', AUTH0_API_URL);
