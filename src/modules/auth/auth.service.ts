import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthPayload } from './interfaces/auth-payload.interface';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

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
      return false;
    }

    return this.generateToken(user);
  }

  async generateToken(user) {
    const payload: AuthPayload = {
      username: user.username,
      email: user.email,
      _id: user._id,
     
    };


    return { access_token: this.jwtService.sign(payload) };
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
