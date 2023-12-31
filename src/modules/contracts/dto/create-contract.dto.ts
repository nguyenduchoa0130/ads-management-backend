// create-contract.dto.ts
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsMongoId, IsDate, IsDateString, IsOptional } from 'class-validator';

export class CreateContractDto {
  @IsNotEmpty()
  @IsMongoId()
  surface: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  company: string;

  @IsOptional()
  email: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  state: number;
  
  @IsNotEmpty()
  start_date: Date;

  @IsNotEmpty()
  end_date: Date;

  @Exclude()
  _id: string;
}
