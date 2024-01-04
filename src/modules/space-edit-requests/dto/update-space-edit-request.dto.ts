import { PartialType } from '@nestjs/swagger';
import { CreateSpaceEditRequestDto } from './create-space-edit-request.dto';

export class UpdateSpaceEditRequestDto extends PartialType(CreateSpaceEditRequestDto) {}
