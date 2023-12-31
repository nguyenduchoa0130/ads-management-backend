import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateSpaceTypeDto } from './dto/create-space-type.dto';
import { UpdateSpaceTypeDto } from './dto/update-space-type.dto';
import { Model } from 'mongoose';

@Injectable()
export class SpaceTypeService {
  constructor(@InjectModel('SpaceType') private readonly SpaceTypeModel: Model<any>) {

  }

  async create(createSpaceTypeDto: CreateSpaceTypeDto) {
    return await this.SpaceTypeModel.create(createSpaceTypeDto);
  }

  findAll() {
    return this.SpaceTypeModel.find().exec();
  }

  findOne(id: string) {
    return this.SpaceTypeModel.findById(id);
  }

  async update(id: string, updateSpaceTypeDto: UpdateSpaceTypeDto) {
    return await this.SpaceTypeModel.findByIdAndUpdate(id, updateSpaceTypeDto).exec();
  }

  remove(id: string) {
    return this.SpaceTypeModel.findByIdAndDelete(id).exec();
  }
}
