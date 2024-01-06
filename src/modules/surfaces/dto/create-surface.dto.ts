// create-surface.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsMongoId, IsOptional } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class CreateSurfaceDto {
  @Expose()
  @IsNotEmpty()

  long: string;

  @Expose()
  @IsNotEmpty()

  lat: string;

  @Expose()
  @IsNotEmpty()

  width: number;

  @Expose()
  @IsNotEmpty()

  height: number;

  @Expose()
  @IsNotEmpty()
  @IsMongoId()
  type: string;

  @Expose()
  @IsNotEmpty()
  @IsMongoId()
  space: string;

  @IsOptional()
  img_url: any;

  @Exclude()
  _id: string

  
}
