import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import * as p from '../../path';
import { ILoginUser, IUser } from '../../../../shared/api/api-interfaces';
import { ActionSuccessResponse, IResponse } from '../../../../shared/api-gui/src/i-response';
import { UserService } from '../../mapper';
import { LOGGED_IN_MSG } from '../../messages';
import { SkipAuth } from '../../../../shared/api/skip-auth';


@Controller()
export class IAuth {

  constructor(private readonly userService: UserService) {}
  @SkipAuth()
  @Get(p.AuthRoutes.login)
  async login(@Body() data: ILoginUser): Promise<IResponse<IUser>> {
      const gg = await this.userService.repository.findOne({where: {id: 1}});
          console.log(`${gg.username} ${gg.id}`);

    const user = await this.userService.login(data);
    return new ActionSuccessResponse<Partial<IUser>>({
      message: LOGGED_IN_MSG,
      data: user,
    });
  }
}
