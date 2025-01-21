import { Module } from '@nestjs/common';
import { IAuth } from './ctrl/auth';

@Module({
  imports: [],
  controllers: [IAuth],
  providers: [],
})
export class CtrlModule {}
