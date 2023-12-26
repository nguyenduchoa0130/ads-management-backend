import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSurfaceTypeDto } from './dto/create-surface_type.dto';
import { UpdateSurfaceTypeDto } from './dto/update-surface_type.dto';
import { SurfaceType } from './surface-type.schema';


@Injectable()
export class SurfaceTypeService {
  constructor(@InjectModel('SurfaceType') private readonly surfaceTypeModel :Model<any>) {
    
  }

  create(createSurfaceTypeDto: CreateSurfaceTypeDto) {
  const createdSurfaceType = new  this.surfaceTypeModel(createSurfaceTypeDto);
  return createdSurfaceType.save();
  }

  findAll() {
    return this.surfaceTypeModel.find({deleted_at: null}).exec();
  }

  findOne(id: string) {
    const surfaceType = this.surfaceTypeModel.find({deleted_at:null, _id: id}).exec();

    return surfaceType;
  }

  update(id: string, updateSurfaceTypeDto: UpdateSurfaceTypeDto) {
    const updated = this.surfaceTypeModel.findByIdAndUpdate(id, updateSurfaceTypeDto,
    { new: true }).exec();

    return updated;
  }

  remove(id: string) {
    const deletedSurfaceType = this.surfaceTypeModel.findByIdAndUpdate(id, { deleted_at: new Date() },
    { new: true }).exec();

    return deletedSurfaceType;
  }
}
