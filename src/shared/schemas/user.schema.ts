
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type UserDocument = HydratedDocument<User>;

@Schema({
  collection: 'users',
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: number;

  @Prop()
  phone: string;

  @Prop()
  birthday: Date;

  @Prop({required: true})
  create_by: User

  @Prop({required:true})
  update_by: User
}

export const UserSchema = SchemaFactory.createForClass(User);