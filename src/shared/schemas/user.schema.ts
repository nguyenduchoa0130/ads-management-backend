
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type SurfaceTypeDocument = HydratedDocument<SurfaceType>;

@Schema({
  collection:'users',
  timestamps: true,
})
export class SurfaceType  {
  @Prop({required: true})
  username: string;

  @Prop({required: true})
  email: string;

  @Prop({required: true})
  password: string;
}

export const SurfaceTypeSchema = SchemaFactory.createForClass(SurfaceType);