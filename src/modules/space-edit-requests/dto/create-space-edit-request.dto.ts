// create-space-edit-request.dto.ts
import { IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateSpaceEditRequestDto {
  @IsNotEmpty()
  long: string;

  @IsNotEmpty()
  lat: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  reason: string;

  @IsNotEmpty()
  request_date: Date;

  @IsNotEmpty()
  @IsMongoId()
  type: string;

  @IsNotEmpty()
  @IsMongoId()
  format: string;

  @IsNotEmpty()
  @IsMongoId()
  ward: string;

  @IsNotEmpty()
  @IsMongoId()
  space: string;
}
