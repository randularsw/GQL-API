import { Cat } from './cat.model';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [MongooseModule.forFeature([{ name: Cat.name, schema: Cat }])],
  providers: [CatsResolver, CatsService],
})
export class CatsModule {}
