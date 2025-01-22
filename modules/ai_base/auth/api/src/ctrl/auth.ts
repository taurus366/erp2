import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import * as p from '../path';
import { ILoginUser, IUser } from '../../../shared/api-interfaces';
import { ActionSuccessResponse, IResponse } from '../../../shared/api-gui/src/i-response';
import { UserService } from '../db/service/user.service';

@Controller()
export class IAuth {
  constructor(private readonly userService: UserService) {}

  @Get(p.AuthRoutes.login)
  async login(@Body() data: ILoginUser): Promise<IResponse<IUser>> {
    const user = await this.userService.login(data);
    return new ActionSuccessResponse<Partial<IUser>>({
      message: 'LOGGED_IN_MSG',
      data: user,
    });
  }
}
