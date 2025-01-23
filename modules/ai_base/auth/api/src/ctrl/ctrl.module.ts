import { Module } from '@nestjs/common';
import { IAuth } from './handlers/auth';
import { DbModule } from '../db/db.module';
import { SvcModule } from '../svc/svc.module';
@Module({
  imports: [
  DbModule,
  SvcModule
  ],
  providers: [],
  controllers: [IAuth],
  // providers: [DbModule],
  exports: [DbModule, SvcModule],
})
export class CtrlModule {}
