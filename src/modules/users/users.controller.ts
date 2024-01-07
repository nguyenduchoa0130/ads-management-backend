import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from '../auth/auth.service';


@Controller('api/users')
export class UsersController {
  constructor(private  usersService: UsersService, private  authService: AuthService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const users = await this.usersService.findOneUsername(createUserDto.username);
    if (users) {
      throw new HttpException(
        { message: 'User already exists' },
        400
      );
    }

    if (!createUserDto.role) {
      createUserDto.role = 0;
    }
    createUserDto.create_by = "65959dbbaecd929f18e38279";
    createUserDto.update_by = "65959dbbaecd929f18e38279";

    createUserDto.password = await this.authService.hashPassword(createUserDto.password);
    const createdUser = await this.usersService.create(createUserDto);

    
    return { message: "User created successfully", responseData: createdUser }

  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return { message: "User created successfully", responseData: users }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    return {
      message: 'get data success',
      responseData:await this.usersService.findOne(id)
    }

  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

    if(updateUserDto.password) {
      updateUserDto.password = await this.authService.hashPassword(updateUserDto.password);
    }else {
      delete updateUserDto['password'];
    }
    const updatedUser = await this.usersService.update(id, updateUserDto);

    return { message: "User updated successfully", responseData: updatedUser }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleted = await  this.usersService.remove(id);
    return { message: "User updated successfully", responseData: deleted }
  }
}
