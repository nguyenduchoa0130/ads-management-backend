import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateSpaceTypeDto } from './dto/create-space-type.dto';
import { UpdateSpaceTypeDto } from './dto/update-space-type.dto';
import { Model } from 'mongoose';

@Injectable()
export class SpaceTypeService {
  constructor(@InjectModel('SpaceType') private readonly SpaceTypeModel :Model<any>) {
    
  }

  create(createSpaceTypeDto: CreateSpaceTypeDto) {
   return   this.SpaceTypeModel.create(createSpaceTypeDto);
  
   
  }

  findAll() {
    return this.SpaceTypeModel.find().exec();
  }

  findOne(id: string) {
    return this.SpaceTypeModel.findById(id);
  }

  update(id: string, updateSpaceTypeDto: UpdateSpaceTypeDto) {
    return `This action updates a #${id} spaceType`;
  }

  remove(id: string) {
    return `This action removes a #${id} spaceType`;
  }
}
