import { Module } from '@nestjs/common';
import { TestService } from './service/test.service';

@Module({
  // imports: [TestService],
  providers: [TestService],
  exports: [TestService],

})
export class SvcModule {}
