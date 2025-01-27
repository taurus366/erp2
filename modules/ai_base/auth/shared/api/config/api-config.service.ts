import { Injectable, Optional } from '@nestjs/common';
import { IApiConfig } from './i-api-config';

@Injectable()
export class ApiConfigService {
  configs: IApiConfig;

  constructor(configs: IApiConfig) {
    if(configs) {
      this.configs = configs;
    }
  }
}
