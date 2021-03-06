import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Cat {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: String;

  // @Field({ nullable: true })
  // age: number;
}

export type CatDocument = Cat & Document;

export const CatSchema = SchemaFactory.createForClass(Cat);
