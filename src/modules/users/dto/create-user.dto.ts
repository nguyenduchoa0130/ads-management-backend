import { IsEnum, IsString, MaxLength, IsNotEmpty, IsEmail, isNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;




  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  role: number


  phone: string


  birthday: Date

  email: string;
}
