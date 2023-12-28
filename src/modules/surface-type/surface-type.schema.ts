
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type SurfaceTypeDocument = HydratedDocument<SurfaceType>;

@Schema({
  collection:'surface_types',
  timestamps: true,
})
export class SurfaceType  {
  @Prop({required: true})
  name: string;
}

export const SurfaceTypeSchema = SchemaFactory.createForClass(SurfaceType);