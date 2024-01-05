// create-surface-edit-request.dto.ts
import { IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateSurfaceEditRequestDto {
  @IsNotEmpty()
  long: string;

  @IsNotEmpty()
  lat: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  width: number;

  @IsNotEmpty()
  height: number;

  @IsNotEmpty()
  img_url: string;

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

  @IsNotEmpty()
  request_date: Date;
}
