import { PartialType } from '@nestjs/swagger';
import { CreateSurfaceEditRequestDto } from './create-surface-edit-request.dto';

export class UpdateSurfaceEditRequestDto extends PartialType(CreateSurfaceEditRequestDto) {}
