import { IBase } from './api-gui/src/i-base';

export abstract class ILoginUser {
  name: string;
  password: string;
}

export abstract class IUser extends IBase {
  username: string;
  password: string;
  email: string;
  token: string;
  bio: string;
  image: string;
}
