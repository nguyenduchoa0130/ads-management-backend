import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Ward } from './ward.schema';

@Schema({ timestamps: true })
export class District extends Document {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: Number, required: true })
  lng: number;

  @Prop({ type: Number, required: true })
  lat: number;

  @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'Ward' }] })
  wards: Ward[];
}

export type DistrictDocument = District & Document;
export const DistrictSchema = SchemaFactory.createForClass(District);
