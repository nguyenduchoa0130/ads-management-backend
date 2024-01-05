// src/companies/schemas/company.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'companies', timestamps: true }) // Set the custom collection name
export class Company extends Document {
  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  name: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
