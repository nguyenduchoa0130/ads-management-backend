import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { District } from './district.schema';

@Schema({ timestamps: true })
export class Ward extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  lng: number;

  @Prop({ type: Number, required: true })
  lat: number;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'District',
    required: true,
  })
  district: District;
}

export const WardSchema = SchemaFactory.createForClass(Ward);
