import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserService } from '../../db/service/user.service';
import { User } from '../../db/entity/user.entity';

@Injectable()
export class StartService implements OnModuleInit{

  constructor(private readonly userService: UserService) {
  }

  async onModuleInit() {
    // await this.runAsyncServiceLogic();
    await this.createUserIfEmpty();
  }

  private async runAsyncServiceLogic() {
    console.log('Running service logic...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Async service logic complete');
  }

  private async createUserIfEmpty() {
    const records = await this.userService.repository.find();
    if(records.length == 0){
      const newUser = this.userService.repository.create({
        username: 'admin'
      });
      await newUser.setPassword('admin');
      await this.userService.repository.save(newUser);
    }
  }





}
