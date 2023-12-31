import { PartialType } from '@nestjs/mapped-types';
import { CreateSpaceTypeDto } from './create-space-type.dto';

export class UpdateSpaceTypeDto extends PartialType(CreateSpaceTypeDto) {}
