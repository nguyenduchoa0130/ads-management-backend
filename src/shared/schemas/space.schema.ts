import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Ward } from "./ward.schema";
import { SpaceFormat } from "./space-format.schema";
import { SpaceType } from "./space-type.schema";

export type SpaceDocument = HydratedDocument<SpaceType>;
@Schema({
  collection: 'spaces',
  timestamps: true
})

export class Space  {
  @Prop({ required: true })
  long: string

  @Prop({ required: true })
  lat: string

  @Prop({ required: true })
  address: string

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'SpaceType' })
  type: SpaceType

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'SpaceFormat' })
  format: SpaceFormat

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Ward' })
  ward: Ward


}
export const SpaceSchema = SchemaFactory.createForClass(Space);