// create-ward.dto.ts
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateWardDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  lng: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @Expose()
  @IsNotEmpty()
  district: string; // Assuming district is a string representing the ObjectId

  @Exclude()
  readonly _id?: string
}
