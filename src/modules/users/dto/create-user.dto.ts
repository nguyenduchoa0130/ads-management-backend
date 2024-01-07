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

  @IsOptional()
  role: number


  @IsOptional()
  phone: string

  @IsOptional()
  birthday: Date

  @IsNotEmpty()
  email: string;

  @IsOptional()
  create_by
  
  @IsOptional()
  update_by
}
