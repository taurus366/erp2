import { DynamicModule, Global, Module } from '@nestjs/common';
import { ApiConfigService } from './api-config.service';
import { IApiConfig } from './i-api-config';

@Global()
@Module({
  controllers: [],
  providers: [ApiConfigService],
  exports: [ApiConfigService],
})
export class SharedApiConfigModule {
  static iApiConfig: IApiConfig;
  static forRoot(configs: IApiConfig): DynamicModule {
    this.iApiConfig = configs;
    return {
      module: SharedApiConfigModule,
      providers: [
        {
          provide: IApiConfig,
          useValue: configs
        }
      ]
    }
  }
}
