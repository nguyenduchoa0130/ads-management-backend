import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateReportDto {
  @IsNotEmpty()
  readonly surface: ObjectId;

  @IsNotEmpty()
  readonly report_date: Date;
   @IsNotEmpty()
  readonly content: string;
   @IsNotEmpty()
  readonly email: string;
   @IsNotEmpty()
  readonly phone: string;
   @IsNotEmpty()
  readonly state: number;
   @IsNotEmpty()
  readonly img_url_1: string;
   @IsNotEmpty()
  readonly img_url_2: string;
   @IsNotEmpty()
  readonly reporter: string;
   @IsNotEmpty()
  readonly report_format: ObjectId;
}
