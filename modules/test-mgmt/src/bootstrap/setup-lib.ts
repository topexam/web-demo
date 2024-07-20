import { WebFoundationInstance } from '@topexam/web.lib.foundation';
import { WebUtilInstance } from '@topexam/web.lib.util';

import { FileNetworkAccess, MainNetworkAccess } from '@/lib';
import { API_URL, APP_NAME } from '@/config';

export const setupLibs = () => {
  WebFoundationInstance.mainAccess = MainNetworkAccess;
  WebFoundationInstance.fileAccess = FileNetworkAccess;
  WebUtilInstance.statePrefix = APP_NAME;
  WebUtilInstance.apiUrl = API_URL;
};
