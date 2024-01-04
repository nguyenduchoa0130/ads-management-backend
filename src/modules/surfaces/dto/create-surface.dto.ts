// create-surface.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsMongoId } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class CreateSurfaceDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  long: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  lat: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  address: string;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  width: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  height: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  img_url: string;

  @Expose()
  @IsNotEmpty()
  @IsMongoId()
  type: string;

  @Expose()
  @IsNotEmpty()
  @IsMongoId()
  space: string;

  @Exclude()
  _id: string
}
