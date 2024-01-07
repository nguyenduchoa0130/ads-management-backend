// create-contract.dto.ts
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsMongoId, IsDate, IsDateString, IsOptional } from 'class-validator';

export class CreateContractDto {
  @IsNotEmpty()
  @IsMongoId()
  space: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  start_date: Date;

  @IsOptional()
  email: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  state: number;

  @IsNotEmpty()
  end_date: Date;

  @Exclude()
  _id: string;
}
