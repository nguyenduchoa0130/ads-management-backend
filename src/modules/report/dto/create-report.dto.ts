import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsOptional, isNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateReportDto {
  @Optional()
  space: ObjectId;

  @Optional()
  surface: ObjectId;

  @IsNotEmpty()
  object: ObjectId;

  @IsNotEmpty()
  report_date: Date;

  @IsNotEmpty()
  reporter: string;

  @IsNotEmpty()
  content: string;

  @IsOptional()
  email: string;

  @IsOptional()
  phone: string;

  @IsNotEmpty()
  state: number;

  @IsOptional()
  img_url_1: string;

  @IsOptional()
  img_url_2: string;


  @IsNotEmpty()
  type: 1

  @IsOptional()
  method: string
  
  @IsNotEmpty()
  report_format: ObjectId;
}
