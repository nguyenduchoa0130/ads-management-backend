import { IsEnum, IsString, MaxLength, IsNotEmpty, IsEmail, isNotEmpty, IsOptional } from 'class-validator';

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


  @IsOptional()
  phone: string

  @IsOptional()
  birthday: Date

  @IsNotEmpty()
  email: string;
}
