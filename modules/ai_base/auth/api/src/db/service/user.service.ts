import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService extends BaseService<User>{}
