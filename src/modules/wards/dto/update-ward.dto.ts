// update-ward.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateWardDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  lng?: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  lat?: number;


  @IsNotEmpty()
  district?: string; // Assuming district is a string representing the ObjectId
}
