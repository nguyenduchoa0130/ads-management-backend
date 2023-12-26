
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type SurfaceTypeDocument = HydratedDocument<SurfaceType>;

@Schema({
  collection:'surface_types',
  timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	},
})
export class SurfaceType  {
  @Prop({required: true})
  name: string;

  @Prop({ type: Date, default: null })
  deleted_at: Date;

  

}

export const SurfaceTypeSchema = SchemaFactory.createForClass(SurfaceType);