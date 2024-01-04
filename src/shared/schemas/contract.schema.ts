import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Company } from './company.schema';


@Schema({ timestamps: true , collection: 'contracts'})
export class Contract extends Document {
  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Surface' })
  surface: string;

  @Prop({  required: true })
  content: string;

  @Prop({ required: true , type:mongoose.Types.ObjectId, ref: 'Company'})
  company: Company;

  @Prop({ required: true })
  start_date: Date;

  @Prop({ required: true })
  end_date: Date;
}


export const ContractSchema = SchemaFactory.createForClass(Contract);