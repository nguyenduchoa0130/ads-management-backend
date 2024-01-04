import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Schema as MongooseSchema } from "mongoose"
import { SurfaceType } from "./surface-type.schema"
import { Space } from "./space.schema"
import { Surface } from "./surface.schema"


@Schema({collection: 'surface_edit_requests', timestamps: true})
export class SurfaceEditRequest extends Document{
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
  img_url: string

  @Prop({ required: true })
  reason: string

  


  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'SurfaceType' })
  type: SurfaceType

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Space' , required: true})
  space: Space


  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Surface' , required: true})
  surface: Surface

}

export const SurfaceEditRequestSchema = SchemaFactory.createForClass(SurfaceEditRequest);