
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

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: number;

  @Prop()
  phone: string;

  @Prop()
  birthday: Date;

  @Prop({ required: true, ref: 'User', type: SchemaMongoose.Types.ObjectId })
  create_by: User

  @Prop({ required: true, ref: 'User', type: SchemaMongoose.Types.ObjectId })
  update_by: ObjectId

  @Prop() 
  otp:string
}

export const UserSchema = SchemaFactory.createForClass(User);