import { IApiConfig } from '@erp/config';

const packageJson = require('../../../../package.json');
export const environment: IApiConfig = {
  production: false,
  applicationName: 'ERP',
  host: 'http://localhost',
  port: 3001,
  version: packageJson.version,
  debug: true,
  jwtSecret: 'jwtSecret',
  jwtExpiresIn: '1d'
};
