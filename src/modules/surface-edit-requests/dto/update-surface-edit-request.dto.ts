import { PartialType } from '@nestjs/swagger';
import { CreateSurfaceEditRequestDto } from './create-surface-edit-request.dto';
import { IsOptional } from 'class-validator';

export class UpdateSurfaceEditRequestDto extends PartialType(CreateSurfaceEditRequestDto) {
  @IsOptional()
  state?: number;
}
