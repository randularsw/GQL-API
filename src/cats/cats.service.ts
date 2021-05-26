import { Cat, CatDocument } from './cat.model';
import { CreateCatDto } from './dto/create-cat.dto';
import { GetCatDto } from './dto/get-cat.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async getCat(getCatDto: GetCatDto): Promise<Cat> {
    return this.catModel.findById(getCatDto.id).exec();
  }

  async getCats(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async createCat(createCatDto: CreateCatDto): Promise<Cat> {
    console.log(createCatDto);
    const cat = new this.catModel({
      ...createCatDto,
    });
    console.log(cat);
    return cat.save();
  }
}
