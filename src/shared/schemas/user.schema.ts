
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId, Schema as SchemaMongoose } from 'mongoose';


export type UserDocument = HydratedDocument<User>;

@Schema({
  collection: 'users',
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ required: true })
  role: number;

  @Prop()
  phone: string;

  @Prop()
  birthday: Date;

  @Prop({ ref: 'User', type: SchemaMongoose.Types.ObjectId })
  create_by: ObjectId

  @Prop({ ref: 'User', type: SchemaMongoose.Types.ObjectId })
  update_by: ObjectId

  @Prop() 
  otp:string
}

export const UserSchema = SchemaFactory.createForClass(User);