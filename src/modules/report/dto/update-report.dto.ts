import { PartialType } from '@nestjs/mapped-types';
import { ObjectId } from 'mongoose';
import { CreateReportDto } from './create-report.dto';

export class UpdateReportDto extends PartialType(CreateReportDto) {
  readonly surface?: ObjectId;
  readonly report_date?: Date;
  readonly content?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly state?: number;
  readonly img_url_1?: string;
  readonly img_url_2?: string;
  readonly reporter?: string;
  readonly report_format?: ObjectId;
}
