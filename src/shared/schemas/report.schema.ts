// src/reports/schemas/report.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ReportFormat } from './report-format.schema';
import { Surface } from './surface.schema';
import { Space } from './space.schema';

@Schema({collection:'reports', timestamps: true})
export class Report extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Surface' })
  surface: Surface;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Space' })
  space: Space;

  @Prop({ type: Date })
  report_date: Date;

  @Prop({required: true})
  content: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  method: string;

  @Prop({required: true})
  state: number;

  @Prop()
  img_url_1: string;

  @Prop()
  img_url_2: string;

  @Prop({required: true})
  reporter: string;


  @Prop({required: true})
  type: number

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'ReportFormat' })
  report_format: ReportFormat;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
