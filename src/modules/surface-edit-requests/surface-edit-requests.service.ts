// surface-edit-requests.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateSurfaceEditRequestDto } from './dto/create-surface-edit-request.dto';
import { UpdateSurfaceEditRequestDto } from './dto/update-surface-edit-request.dto';
import { SurfaceEditRequest } from 'src/shared/schemas/surface-edit-request.schema';

@Injectable()
export class SurfaceEditRequestsService {
  constructor(
    @InjectModel(SurfaceEditRequest.name)
    private readonly surfaceEditRequestModel: Model<SurfaceEditRequest>,
  ) {}

  findAll() {
    return this.surfaceEditRequestModel.find().populate('type space surface').exec();
  }

  findOne(id: string) {
    return this.surfaceEditRequestModel.findById(id).populate('type space surface').exec();
  }

  create(createSurfaceEditRequestDto: CreateSurfaceEditRequestDto) {
    const newSurfaceEditRequest = new this.surfaceEditRequestModel(createSurfaceEditRequestDto);
    return newSurfaceEditRequest.save();
  }

  async update(id: string, updateSurfaceEditRequestDto: UpdateSurfaceEditRequestDto) {
    const existingSurfaceEditRequest = await this.surfaceEditRequestModel.findByIdAndUpdate(
      id,
      updateSurfaceEditRequestDto,
      { new: true },
    ).populate('type space').exec();

    if (!existingSurfaceEditRequest) {
      throw new NotFoundException(`Surface Edit Request with id ${id} not found`);
    }

    return existingSurfaceEditRequest;
  }

  async delete(id: string) {
    const deletedSurfaceEditRequest = await this.surfaceEditRequestModel.findByIdAndDelete(id);
    if (!deletedSurfaceEditRequest) {
      throw new NotFoundException(`Surface Edit Request with id ${id} not found`);
    }
    return deletedSurfaceEditRequest;
  }
}
