import { PartialType } from '@nestjs/mapped-types';
import { CreateSurfaceDto } from './create-surface.dto';
import { Exclude, Expose } from 'class-transformer';
import { IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';



export class UpdateSurfaceDto extends PartialType(CreateSurfaceDto) {

  @IsOptional()
  img_url: string;
}

