import { SpaceFormat, SpaceFormatSchema } from '../../shared/schemas/space-format.schema';
// src/space-formats/space-formats.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpaceFormatDto } from './dto/create-space-format.dto';
import { UpdateSpaceFormatDto } from './dto/update-space-format.dto';



@Injectable()
export class SpaceFormatsService {
  constructor(@InjectModel(SpaceFormat.name) private spaceFormatModel: Model<any>) {}

  async create(CreateSpaceFormatDto: CreateSpaceFormatDto): Promise<SpaceFormat> {
    const newSpaceFormat = new this.spaceFormatModel(CreateSpaceFormatDto);
    return newSpaceFormat.save();
  }

  async findAll(): Promise<SpaceFormat[]> {
    return this.spaceFormatModel.find().exec();
  }

  async findOne(id: string): Promise<SpaceFormat> {
    const spaceFormat = await this.spaceFormatModel.findById(id).exec();
    if (!spaceFormat) {
      throw new NotFoundException('Space Format not found');
    }
    return spaceFormat;
  }

  async update(id: string, updateCreateSpaceFormatDto: UpdateSpaceFormatDto) {
    const updatedFormat = await this.spaceFormatModel.findByIdAndUpdate(id, updateCreateSpaceFormatDto, { new: true }).exec();
    if (!updatedFormat) {
      throw new NotFoundException('Space Format not found');
    }
    return updatedFormat;
  }

  async remove(id: string) {
    const deletedFormat = await this.spaceFormatModel.findByIdAndDelete(id).exec();
    if (!deletedFormat) {
      throw new NotFoundException('Space Format not found');
    }
    return deletedFormat;
  }
}
