// surfaces.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateSurfaceDto } from './dto/create-surface.dto';
import { UpdateSurfaceDto } from './dto/update-surface.dto';
import { Surface } from 'src/shared/schemas/surface.schema';

@Injectable()
export class SurfacesService {
  constructor(@InjectModel(Surface.name) private readonly surfaceModel: Model<Surface>) {}

  findAll() {
    return this.surfaceModel.find().populate('type space').exec();
  }
  findOne(id: string) {
    return this.surfaceModel.findById(id).populate('type space').exec();
  }

  create(createSurfaceDto: CreateSurfaceDto) {
    const newSurface = new this.surfaceModel(createSurfaceDto);
    return newSurface.save();
  }

  async update(id: string, updateSurfaceDto: UpdateSurfaceDto) {
    const existingSurface = await this.surfaceModel.findByIdAndUpdate(id, updateSurfaceDto, { new: true });
    if (!existingSurface) {
      throw new NotFoundException(`Surface with id ${id} not found`);
    }
    return existingSurface;
  }

  async delete(id: string) {
    const deletedSurface = await this.surfaceModel.findByIdAndDelete(id);
    if (!deletedSurface) {
      throw new NotFoundException(`Surface with id ${id} not found`);
    }
    return deletedSurface;
  }
}
