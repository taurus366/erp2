import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CtrlModule, DbModule } from '@erp/auth-api';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CtrlModule,
    DbModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql', // or another DB type
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'your_username',
    //   password: 'your_password',
    //   database: 'your_database',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true, // Only for development
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
