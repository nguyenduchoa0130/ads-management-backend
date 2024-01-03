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
    return { message: "user profile", responseData: req.user };
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

    req.role = 1;
    req.password = await this.authService.hashPassword(req.password);
    return await this.userService.create(req);
  }

}