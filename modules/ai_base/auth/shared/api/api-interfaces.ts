import { IBase } from '../api-gui/src/i-base';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export abstract class ILoginUser {
  username: string;
  password: string;
}

// Update user
export abstract class IUpdateUser {
  @MaxLength(60)
  username: string
  @IsEmail()
  @MaxLength(60)
  email: string
  @IsNotEmpty()
  @MaxLength(255)
  password: string
  @MaxLength(1000)
  bio: string
  // @IsUrl()
  image: string
}

// Register
export abstract class INewUser {
  @MaxLength(60)
  username: string
  @IsEmail()
  @MaxLength(60)
  email: string
  @IsNotEmpty()
  @MaxLength(200)
  password: string
}
// User response
export abstract class IUser {
  username: string;
  email: string;
  token: string;
  bio: string;
  image: string;
}
