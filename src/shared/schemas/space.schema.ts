import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MongooseSchema } from 'mongoose';
import { Ward } from "./ward.schema";
import { SpaceFormat } from "./space-format.schema";
import { SpaceType } from "./space-type.schema";

@Schema({
  collection: 'spaces',
  timestamps: true
})
export class Space extends Document {
  @Prop({ required: true })
  long: string

  @Prop({ required: true })
  lat: string

  @Prop({ required: true })
  address: string

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'space-types' })
  type: SpaceType

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'space-formats' })
  format: SpaceFormat

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'wards' })
  ward: Ward

}
export const SpaceSchema = SchemaFactory.createForClass(Space);