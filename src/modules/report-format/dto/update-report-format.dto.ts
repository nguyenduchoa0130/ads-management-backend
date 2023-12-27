import { PartialType } from '@nestjs/mapped-types';
import { CreateReportFormatDto } from './create-report-format.dto';

export class UpdateReportFormatDto extends PartialType(CreateReportFormatDto) {}
