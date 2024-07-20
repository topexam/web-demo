import { setupSentry } from '@topexam/web.lib.util';

import { SENTRY_DSN, APP_NAME, APP_VERSION, DEPLOYMENT_CHANNEL } from '@/config';

export const setupServices = () => {
  setupSentry({
    sentryDsn: SENTRY_DSN,
    appName: APP_NAME,
    appVersion: APP_VERSION,
    deploymentChannel: DEPLOYMENT_CHANNEL,
  });
};
