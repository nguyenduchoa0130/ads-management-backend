// create-contract.dto.ts
import { IsNotEmpty, IsMongoId } from 'class-validator';

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
}
