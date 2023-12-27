// src/report-formats/schemas/report-format.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection:'report_formats',
  timestamps:true,
})
export class ReportFormat extends Document {
  @Prop()
  name: string;
}

export const ReportFormatSchema = SchemaFactory.createForClass(ReportFormat);
