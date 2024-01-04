import { Prop, Schema } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Ward } from "./ward.schema";
import { SpaceFormat } from "./space-format.schema";
import { SpaceType } from "./space-type.schema";
import { Space } from "./space.schema";


@Schema({ collection: 'space_edit_requests', timestamps: true })
export class SpaceEditRequest extends Document {
  @Prop({ required: true })
  long: string

  @Prop({ required: true })
  lat: string

  @Prop({ required: true })
  address: string

  @Prop({ required: true })
  reason: string

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'SpaceType' })
  type: SpaceType

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'SpaceFormat' })
  format: SpaceFormat

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Ward' })
  ward: Ward

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Space' })
  space: Space
  
}
