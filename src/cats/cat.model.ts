import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  age: number;
}
