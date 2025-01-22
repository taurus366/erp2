import { Module, forwardRef } from '@nestjs/common';
import { IAuth } from './ctrl/auth';
import { DbModule } from './db/db.module';
@Module({
  imports: [
    // forwardRef(() => DbModule)
  DbModule
  ],
  controllers: [IAuth],
  // providers: [DbModule],
})
export class CtrlModule {}
