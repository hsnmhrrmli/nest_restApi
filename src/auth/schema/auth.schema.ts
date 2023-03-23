import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthSchema = HydratedDocument<Auth>;

@Schema()
export class Auth {
  @Prop()
  title: string;

  @Prop()
  datetime: string;

  @Prop()
  body: string;
  
  @Prop()
  id?: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
