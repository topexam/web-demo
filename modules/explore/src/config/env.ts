import { EDeploymentChannel, getEnvFromKey } from '@topexam/web.lib.util';

export const APP_NAME = getEnvFromKey('NAME');
export const APP_VERSION = getEnvFromKey('VERSION');
export const API_URL = getEnvFromKey('API_URL');
export const SENTRY_DSN = getEnvFromKey('SENTRY_DSN');
export const DEPLOYMENT_CHANNEL = getEnvFromKey('DEPLOYMENT_CHANNEL') as EDeploymentChannel;
