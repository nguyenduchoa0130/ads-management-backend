import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SpaceTypeDocument = HydratedDocument<SpaceType>;

@Schema({collection: 'space-types', timestamps: true})
export class SpaceType {
  @Prop({required: true})
  name:string


}


export const SpaceTypeSchema = SchemaFactory.createForClass(SpaceType);