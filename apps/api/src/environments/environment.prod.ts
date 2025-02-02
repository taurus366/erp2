import { IApiConfig } from '@erp/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

const packageJson = require('../../../../package.json');

const api: IApiConfig = {
  production: true,
  applicationName: 'ERP',
  host: 'http://localhost',
  port: 3001,
  version: packageJson.version,
  debug: true,
  jwtSecret: 'jwtSecret',
  jwtExpiresIn: '1d'
};

const db: TypeOrmModuleOptions = {
  type: 'postgres', // or another DB type
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'taurus',
  database: 'erp',
  autoLoadEntities: true,
  synchronize: false, // Only for development
}
export const environment = {api, db};
