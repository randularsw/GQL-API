import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Cat } from './cat.model';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { GetCatDto } from './dto/get-cat.dto';

@Resolver()
export class CatsResolver {
  constructor(private catsService: CatsService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => Cat)
  async getCat(@Args() getCatDto: GetCatDto): Promise<Cat> {
    return this.catsService.getCat(getCatDto);
  }

  @Query(() => [Cat])
  async getCats(): Promise<Cat[]> {
    return this.catsService.getCats();
  }

  @Mutation(() => Cat)
  async createCat(@Args('cat') input: CreateCatDto) {
    return this.catsService.createCat(input);
  }
}
