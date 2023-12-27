import { PartialType } from '@nestjs/mapped-types';
import { CreateSpaceFormatDto } from './create-space-format.dto';

export class UpdateSpaceFormatDto extends PartialType(CreateSpaceFormatDto) {
  readonly name?: string;
}
