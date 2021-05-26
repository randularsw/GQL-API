import { Hobby, HobbySchema } from './hobby.model';

import { HobbyResolver } from './hobby.resolver';
import { HobbyService } from './hobby.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hobby.name, schema: HobbySchema }]),
  ],
  providers: [HobbyService, HobbyResolver],
})
export class HobbyModule {}
