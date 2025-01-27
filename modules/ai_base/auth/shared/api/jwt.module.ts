import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { ApiConfigService } from './config/api-config.service';
import { JwtStrategy } from './jwt-strategy/jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      global: true,
      useFactory: async (config: ApiConfigService) => {
        const jwtSecret = config.configs.jwtSecret;
        if (!jwtSecret) {
          console.error('JWT Secret is missing in ApiConfigService');
          throw new Error('JWT Secret is not defined');
        }
        console.log('JWT Secret being used:', jwtSecret); // Log the secret value being used

        return {
          secret: jwtSecret,  // Ensure this is being set correctly
          signOptions: { expiresIn: config.configs.jwtExpiresIn || '1d' },
        };
      },
      inject: [ApiConfigService]
    })
  ],
  providers: [
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtStrategy
    },
  ],
  exports: [JwtModule, JwtStrategy, PassportModule],
})
export class JwtSharedModule{}
