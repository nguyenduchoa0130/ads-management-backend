import { Injectable } from '@nestjs/common';
import { CreateSurfaceTypeDto } from './dto/create-surface_type.dto';
import { UpdateSurfaceTypeDto } from './dto/update-surface_type.dto';

@Injectable()
export class SurfaceTypeService {
  create(createSurfaceTypeDto: CreateSurfaceTypeDto) {
    return 'This action adds a new surfaceType';
  }

  findAll() {
    return `This action returns all surfaceType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surfaceType`;
  }

  update(id: number, updateSurfaceTypeDto: UpdateSurfaceTypeDto) {
    return `This action updates a #${id} surfaceType`;
  }

  remove(id: number) {
    return `This action removes a #${id} surfaceType`;
  }
}
