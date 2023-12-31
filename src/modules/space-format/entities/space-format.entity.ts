// src/space-formats/schemas/space-format.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection: 'space_formats', timestamps: true})
export class SpaceFormat extends Document {
  @Prop()
  name: string;
}

export const SpaceFormatSchema = SchemaFactory.createForClass(SpaceFormat);

