import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthPayload } from './interfaces/auth-payload.interface';
import { GmailService } from '../gmail/gmail.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
    private gmailService: GmailService,
  ) { }

  //function hash password
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  //function compare password param with user password in database
  async comparePassword(
    password: string,
    storePasswordHash: string,
  ): Promise<any> {
    return await bcrypt.compare(password, storePasswordHash);
  }

  async authentication(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneUsername(username);
   
    const check = await this.comparePassword(password, user.password);

    if (!user || !check) {
      throw new UnauthorizedException('Đăng nhập thất bại');
    }

    return this.generateToken(user);
  }
  async createOTP(username: string) {
    const user = await this.userService.findOneUsername(username);

    if(!user || !user.email){
      return false;
    }
    const otp = Math.floor(Math.random() * 9000) + 1000;

    const updated = await this.userService.update(user._id.toString(), { otp: otp });

    if(updated) {
      await this.gmailService.sendMail(user.email, 'Yêu cầu xác nhận bằng email OTP', './reset-password', {username: username, otpCode:otp});
    }
    return updated;

  }

  async resetPassword(username, password: string, otp: string) {
    const user = await this.userService.findOneUsername(username);

    if (!user || otp != user.otp) {
      return false;
    }
    const passwordHash = await this.hashPassword(password);
    return  (await this.userService.update(user._id.toString(), { password: passwordHash, otp: null })).save();
  }
  generateToken(user) {
    const payload: AuthPayload = {
      username: user.username,
      email: user.email,
      _id: user._id,
      role: user.role
    };



    return { access_token: this.jwtService.sign(payload), message: "Đăng nhập thành công", responseData:user };

  }

  decodeToken(token) {
    return this.jwtService.decode(token);
  }

  async validate(username: string) {
    try {
      const users = await this.userService.findOneUsername(username);

      return users;
    } catch (e) {
      return false;
    }
  }
}
