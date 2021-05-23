import { Cat } from './cat.model';
import { CreateCatDto } from './dto/create-cat.dto';
import { GetCatDto } from './dto/get-cat.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  // constructor(@InjectModel(Cat.name) private catModel: Model<ReturnCatDto>) {}
  cats = [
    {
      id: 0,
      name: 'My Cat',
      age: 24,
    },
  ];

  async getCat(getCatDto: GetCatDto): Promise<Cat> {
    return this.cats.find((cat) => cat.id === getCatDto.id);
  }

  async getCats(): Promise<Cat[]> {
    return this.cats;
  }

  async createCat(createCatDto: CreateCatDto): Promise<Cat> {
    const cat: Cat = {
      id: this.cats.length,
      ...createCatDto,
    };
    this.cats.push(cat);
    return cat;
  }
}
