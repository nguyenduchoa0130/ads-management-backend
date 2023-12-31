import { GmailModule } from './../gmail/gmail.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersService } from '../users/users.service';
import { jwtConstants } from './constants';
import { GmailService } from '../gmail/gmail.service';


@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: {expiresIn: '3000s'}
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy, GmailService],
  controllers: [AuthController],
  exports: [AuthService]

})
export class AuthModule {}
