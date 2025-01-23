import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CtrlModule } from '@erp/auth-api';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CtrlModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // or another DB type
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'taurus',
      database: 'erp',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false, // Only for development
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
