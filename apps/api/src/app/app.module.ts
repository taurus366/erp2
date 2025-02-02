import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CtrlModule } from '@erp/auth-api';
import { TypeOrmModule } from '@nestjs/typeorm';
import {SharedApiConfigModule} from '@erp/config';
import { environment } from '../environments/environment.prod';

@Module({
  imports: [
    SharedApiConfigModule.forRoot(environment.api),
    CtrlModule,
    TypeOrmModule.forRoot(environment.db),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
