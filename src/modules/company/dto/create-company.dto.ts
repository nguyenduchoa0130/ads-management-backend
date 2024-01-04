import { IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateCompanyDto {
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  name: string;
}