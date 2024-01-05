
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';
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
  width: number

  @Prop({ required: true })
  height: number

  @Prop({ required: true })
  img_url: string


  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'SurfaceType' })
  type: SurfaceType

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Space' , required: true})
  space: Space



}
export const SurfaceSchema = SchemaFactory.createForClass(Surface);