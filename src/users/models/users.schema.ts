import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';
import type { IUser } from '../interfaces/iUser';

type UsersDocument = HydratedDocument<IUser>;

@Schema()
export class UsersMongooseSchema {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  contactPhone: string;

  @Prop({ required: true })
  role: string;
}

const UsersSchema = SchemaFactory.createForClass(UsersMongooseSchema);

export type { UsersDocument };
export { UsersSchema };
