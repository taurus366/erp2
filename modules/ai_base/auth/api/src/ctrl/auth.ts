import { Body, Controller, Get, Post } from '@nestjs/common';
import * as p from '../path';
import { ILoginUser, IUser } from '../../../shared/api-interfaces';
import { IResponse } from '../../../shared/api-gui/src/i-response';
@Controller()
export class IAuth {


  // async login(@Body() data:): Promise<IResponse<IUser>> {
  @Post(p.AuthRoutes.login)
   async login(@Body() data: ILoginUser): Promise<IResponse<IUser>> {

    return 'data';
  }




}
