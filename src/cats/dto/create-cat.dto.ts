import { ArgsType, Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCatDto {
  @Field()
  name: string;

  @Field()
  age: number;
}
