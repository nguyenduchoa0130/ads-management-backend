// space-edit-requests/space-edit-requests.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateSpaceEditRequestDto } from './dto/create-space-edit-request.dto';
import { UpdateSpaceEditRequestDto } from './dto/update-space-edit-request.dto';
import { SpaceEditRequest } from 'src/shared/schemas/space-edit-request.schema';

@Injectable()
export class SpaceEditRequestsService {
  constructor(
    @InjectModel(SpaceEditRequest.name)
    private readonly spaceEditRequestModel: Model<SpaceEditRequest>,
  ) {}

  findAll() {
    return this.spaceEditRequestModel.find().populate('type format ward space').exec();
  }

  findOne(id: string) {
    return this.spaceEditRequestModel.findById(id).populate('type format ward space').exec();
  }

  create(createSpaceEditRequestDto: CreateSpaceEditRequestDto) {
    const newSpaceEditRequest = new this.spaceEditRequestModel(createSpaceEditRequestDto);
    return newSpaceEditRequest.save();
  }

  async update(id: string, updateSpaceEditRequestDto: UpdateSpaceEditRequestDto) {
    const existingSpaceEditRequest = await this.spaceEditRequestModel.findByIdAndUpdate(
      id,
      updateSpaceEditRequestDto,
      { new: true },
    ).populate('type format ward space').exec();

    if (!existingSpaceEditRequest) {
      throw new NotFoundException(`Space Edit Request with id ${id} not found`);
    }

    return existingSpaceEditRequest;
  }

  async delete(id: string) {
    const deletedSpaceEditRequest = await this.spaceEditRequestModel.findByIdAndDelete(id);
    if (!deletedSpaceEditRequest) {
      throw new NotFoundException(`Space Edit Request with id ${id} not found`);
    }
    return deletedSpaceEditRequest;
  }
}
