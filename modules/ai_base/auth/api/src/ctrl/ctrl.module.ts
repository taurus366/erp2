import { Module } from '@nestjs/common';
import { IAuth } from './handlers/auth';
import { DbModule } from '../db/db.module';
import { SvcModule } from '../svc/svc.module';
import { JwtSharedModule } from '../../../shared/api/jwt.module';
import { SharedApiConfigModule } from '@erp/config';
@Module({
  imports: [
  DbModule,
  SvcModule,
  JwtSharedModule,
  ],
  providers: [SharedApiConfigModule],
  controllers: [IAuth],
  // providers: [DbModule],
  exports: [DbModule, SvcModule],
})
export class CtrlModule {}
