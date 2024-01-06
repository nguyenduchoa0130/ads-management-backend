// create-surface-edit-request.dto.ts
import { IsNotEmpty, IsMongoId, IsString, IsOptional } from 'class-validator';

export class CreateSurfaceEditRequestDto {
  @IsNotEmpty()
  long: string;

  @IsNotEmpty()
  lat: string;

  @IsNotEmpty()
  width: number;

  @IsNotEmpty()
  height: number;

  
  img_url?: string;

  @IsNotEmpty()
  reason: string;

  @IsNotEmpty()
  @IsMongoId()
  type: string;

  @IsNotEmpty()
  @IsMongoId()
  space: string;

  @IsNotEmpty()
  surface: string;

  @IsOptional()
  state: number

  @IsNotEmpty()
  request_date: string;
}
