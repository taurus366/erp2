import { Module } from '@nestjs/common';
import { StartService } from './service/start.service';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  providers: [StartService],
  exports: [StartService],

})
export class SvcModule {}
