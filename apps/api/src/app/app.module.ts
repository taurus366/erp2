import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CtrlModule } from '@erp/auth-api';

@Module({
  imports: [CtrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
