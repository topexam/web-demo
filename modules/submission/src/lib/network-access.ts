import { RestNetworkAccess } from '@topexam/web.lib.network';
import { K_LS_ACCESS_TOKEN } from '@topexam/web.lib.util';
import { API_URL } from '@/config';

export const MainNetworkAccess = new RestNetworkAccess('main', API_URL, {
  getAccessTokenFn: () => localStorage.getItem(K_LS_ACCESS_TOKEN) ?? '',
});
export const FileNetworkAccess = new RestNetworkAccess('file', '', {
  getAccessTokenFn: () => localStorage.getItem(K_LS_ACCESS_TOKEN) ?? '',
});
