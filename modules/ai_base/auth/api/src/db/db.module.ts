import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserService } from './service/user.service';
import { JwtSharedModule } from '../../../shared/api/jwt.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Register the User entity
    JwtSharedModule
  ],
  providers: [
    UserService,
    JwtSharedModule, // Ensure JwtService is included if UserService uses it
  ],
  exports: [
    UserService, // Export for use in CtrlModule
  ],
})
export class DbModule {}
