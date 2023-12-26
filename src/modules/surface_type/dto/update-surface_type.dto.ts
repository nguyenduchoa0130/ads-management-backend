import { PartialType } from '@nestjs/mapped-types';
import { CreateSurfaceTypeDto } from './create-surface_type.dto';

export class UpdateSurfaceTypeDto extends PartialType(CreateSurfaceTypeDto) {}
