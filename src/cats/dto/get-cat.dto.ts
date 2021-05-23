import { ArgsType, Field, ID, Int } from '@nestjs/graphql';

@ArgsType()
export class GetCatDto {
  @Field()
  id: number;
}
