import { PartialType } from '@nestjs/mapped-types';
import { ObjectId } from 'mongoose';
import { CreateReportDto } from './create-report.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateReportDto extends PartialType(CreateReportDto) {
  @IsNotEmpty()
  reporter?: string;
}
