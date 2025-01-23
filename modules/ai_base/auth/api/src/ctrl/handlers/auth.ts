import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import * as p from '../../path';
import { ILoginUser, IUser } from '../../../../shared/api-interfaces';
import { ActionSuccessResponse, IResponse } from '../../../../shared/api-gui/src/i-response';
import { UserService } from '../../mapper';


@Controller()
export class IAuth {

  constructor(private readonly userService: UserService) {}
  @Get(p.AuthRoutes.login)
  async login(@Body() data: ILoginUser): Promise<IResponse<IUser>> {
      const gg = await this.userService.repository.findOne({where: {id: 1}});
          console.log(`${gg.username} ${gg.id}`);
    // const user2 =  this.userService.repository.create();
    // user2.username = 'admin';
    // await this.userService.repository.manager.save(user2);
    // const user = await this.
    // const user = await this.userService.login(data);
    const user = {};
    return new ActionSuccessResponse<Partial<IUser>>({
      message: 'LOGGED_IN_MSG',
      data: user,
    });
  }
}
