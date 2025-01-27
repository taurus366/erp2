import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CtrlModule } from '@erp/auth-api';
import { TypeOrmModule } from '@nestjs/typeorm';
import {SharedApiConfigModule} from '@erp/config';
import { environment } from '../environments/environment.prod';

@Module({
  imports: [
    SharedApiConfigModule.forRoot(environment),
    CtrlModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // or another DB type
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'taurus',
      database: 'erp',
      autoLoadEntities: true,
      synchronize: false, // Only for development
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
