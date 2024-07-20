import { EDeploymentChannel, getEnvFromKey } from '@topexam/web.lib.util';

export const APP_NAME = getEnvFromKey('NAME');
export const APP_VERSION = getEnvFromKey('VERSION');
export const SENTRY_DSN = getEnvFromKey('SENTRY_DSN');
export const AUTH0_DOMAIN = process.env['REACT_APP_AUTH0_DOMAIN'] || '<empty>';
export const AUTH0_CLIENT_ID = process.env['REACT_APP_AUTH0_CLIENT_ID'] || '<empty>';
export const AUTH0_AUDIENCE = process.env['REACT_APP_AUTH0_AUDIENCE'] || '<empty>';
export const AUTH0_AUDIENCE_API = process.env['REACT_APP_AUTH0_AUDIENCE_API'] || '<empty>';
export const AUTH0_API_URL = process.env['REACT_APP_AUTH0_API_URL'] || '<empty>';

export const API_URL = getEnvFromKey('API_URL');
export const DEPLOYMENT_CHANNEL = getEnvFromKey('DEPLOYMENT_CHANNEL') as EDeploymentChannel;
