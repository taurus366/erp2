import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from './base.service';
import { User } from '../entity/user.entity';
import { ILoginUser, INewUser, IUpdateUser, IUser } from '../../../../shared/api-interfaces';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends BaseService<User>{
  // constructor(@InjectRepository(User) repository: Repository<User>,
  //             private jwtService: JwtService
  // ) {
  //   super();
  //   this.repository = repository;
  // }


  async login(data: ILoginUser): Promise<IUser> {
    const user = await this.validateUser(data.username, data.password);
    return {
      ...user as IUser,
      token: 'xxx'
    }
  }


  //
  // async register(data: INewUser) {
  //   const existingUser = await this.findOne(null, {where: [
  //       {email: data.email.toLowerCase()},
  //       {username: data.username.toLowerCase()}
  //     ]})
  //
  //   if (existingUser) {
  //     throw new BadRequestException('DUPLICATE_RESOURCE_MSG')
  //   }
  //
  //   const user: Partial<User> = {...data}
  //   user.password = await this.hashPassword(user.password)
  //   await this.insert(user)
  //   return {
  //     ...user,
  //     password: null,
  //     token: await this.generateJWTToken({sub: user.id.toString(), email: user.email, username: user.username}),
  //   }
  // }
  //
  //
  // async updateUserInfo(userId: number, data: Partial<IUpdateUser>) {
  //   const user = await this.findOne({id: userId})
  //   if (!user) {
  //     throw new BadRequestException('User not found');
  //   }
  //
  //   if (data.password) {
  //     data.password = await this.hashPassword(data.password)
  //   } else {
  //     delete data.password
  //   }
  //
  //   await this.update({id: userId}, data)
  //   const newUserInfo = {...user, ...data}
  //
  //   return {
  //     ...newUserInfo,
  //     password: null,
  //     token: await this.generateJWTToken({sub: userId.toString(), email: newUserInfo.email, username: newUserInfo.username}),
  //   }
  // }
  //
  private async validateUser(usernameLogin: string, passwordLogin: string): Promise<Partial<IUser>> {
    const user = await this.findOne({ username: usernameLogin.toLowerCase().trim() });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { id, email, username, bio, image } = user;

    const validPass = await bcrypt.compare(passwordLogin, user.password);

    if(!validPass) {
      throw new NotFoundException('password not match');
    }

    return {id, email, username, bio, image}

  }

  // private async generateJWTToken(data: {
  //   sub: string;
  //   email: string;
  //   username: string;
  // }): Promise<string> {
  //   return this.jwtService.sign(data)
  // }

  private async hashPassword(raw: string): Promise<string> {
    return await bcrypt.hash(raw, 10);
  }

  // getJwtInfo(req): {sub: string, email: string, username: string, iat:number, exp: number}|null {
  //   if(!req.headers?.authorization) {
  //     return null;
  //   }
  //   const authArr:string[] = req?.headers?.authorization.split(' ');
  //   if(authArr.length !== 2) {
  //     return null;
  //   }
  //   return this.jwtService.decode(authArr[1]);
  // }

}
