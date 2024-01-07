import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


@Schema({ timestamps: true , collection: 'space-contracts'})
export class SpaceContract extends Document {
  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Space' })
  space: string;

  @Prop({  required: true })
  content: string;

  @Prop({ required: true })
  company: string;

  @Prop()
  phone: string;
  
  @Prop()
  email: string;

  @Prop()
  address: string;


  @Prop({ required: true })
  start_date: Date;

  @Prop({ required: true })
  end_date: Date;

  @Prop({ required: true })
  state: number;
}


export const SpaceContractSchema = SchemaFactory.createForClass(SpaceContract);