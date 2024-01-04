// create-contract.dto.ts
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsMongoId, IsDate, IsDateString } from 'class-validator';

export class CreateContractDto {
  @IsNotEmpty()
  @IsMongoId()
  surface: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsMongoId()
  company: string;

  @IsNotEmpty()
  start_date: Date;

  @IsNotEmpty()
  end_date: Date;

  @Exclude()
  _id: string;
}
