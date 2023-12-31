import { Controller, Get, Request, Post, UseGuards, Body, HttpException, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtAuthGuard } from './guards/auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';



@Controller()
export class AuthController {
  constructor(private authService: AuthService, private userService: UsersService) { }

  @UseGuards(LocalStrategy)
  @Post('api/login')
  async login(@Body() req) {
    return await this.authService.authentication(req.username, req.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('api/profile')
  async getProfile(@Request() req) {
    const user = await this.userService.findOne(req.user._id);
    return { message: "user profile", responseData: user };
  }

  //fucntion register user
  @Post('api/register')
  async registerUser(@Body() req: CreateUserDto) {

    const users = await this.userService.findOneUsername(req.username);
    if (users) {
      throw new HttpException(
        { message: 'User already exists' },
        400
      );
    }

    req.role = 0;
    req.password = await this.authService.hashPassword(req.password);
    return await this.userService.create(req);
  }
  @Post('api/verify-username')
  async verifyUsername(@Body() req) { 
    if(req.username) {
      const send = await this.authService.createOTP(req.username);
      return { message: 'Kiểm tra email của bạn và nhập mã OTP'};
    }
    return { message: 'Kiểm tra email của bạn và nhập mã OTP'};

  }
  @Post('api/reset-password')
  async resetPassword(@Body() req) { 
    console.log(req);
    if(req.username) {
      const send = await this.authService.resetPassword(req.username, req.password, req.otp);
      if(send) {
        return { message: 'Thay đổi mật khẩu thành công', responseData:send};
      }
      
    }
    return { message: 'Kiểm tra email của bạn và nhập mã OTP'};

  }
}