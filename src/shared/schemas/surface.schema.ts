
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MongooseSchema } from 'mongoose';
import { SurfaceType } from "./surface-type.schema";
import { Space } from "./space.schema";

@Schema({
  collection: 'surfaces',
  timestamps: true
})
export class Surface extends Document {
  @Prop({ required: true })
  long: string

  @Prop({ required: true })
  lat: string

  @Prop({ required: true })
  address: string

  @Prop({ required: true })
  width: number

  @Prop({ required: true })
  height: number

  @Prop({ required: true })
  img_url_1: string

  
  @Prop({ required: true })
  img_url_2: string

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'surface-types' })
  type: SurfaceType

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'spaces' , required: true})
  space: Space



}
export const SurfaceSchema = SchemaFactory.createForClass(Space);