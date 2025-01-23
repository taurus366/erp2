import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class TestService implements OnModuleInit{


  async onModuleInit() {
    await this.runAsyncServiceLogic();
  }

  private async runAsyncServiceLogic() {
    console.log('Running service logic...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Async service logic complete');
  }





}
