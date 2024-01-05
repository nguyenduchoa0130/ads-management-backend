// spaces.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';
import { Space } from 'src/shared/schemas/space.schema';

@Injectable()
export class SpacesService {
  constructor(@InjectModel(Space.name) private readonly spaceModel: Model<Space>) { }

  async findAll() {
    return await this.spaceModel.find().populate({path: 'ward type format'}).exec();
  }

  create(createSpaceDto: CreateSpaceDto) {
    const newSpace = new this.spaceModel(createSpaceDto);
    return newSpace.save();
  }

  findOne(id) {
    return this.spaceModel.findById(id);
  }
  async update(id: string, updateSpaceDto: UpdateSpaceDto) {
    const existingSpace = await this.spaceModel.findByIdAndUpdate(id, updateSpaceDto, { new: true });
    if (!existingSpace) {
      throw new NotFoundException(`Space with id ${id} not found`);
    }
    return existingSpace;
  }

  async delete(id: string) {
    const deletedSpace = await this.spaceModel.findByIdAndDelete(id);
    if (!deletedSpace) {
      throw new NotFoundException(`Space with id ${id} not found`);
    }
    return deletedSpace;
  }
}
