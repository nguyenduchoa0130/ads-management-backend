import { Injectable } from '@nestjs/common';
import { CreateSurfaceDto } from './dto/create-surface.dto';
import { UpdateSurfaceDto } from './dto/update-surface.dto';

@Injectable()
export class SurfacesService {
  create(createSurfaceDto: CreateSurfaceDto) {
    return 'This action adds a new surface';
  }

  findAll() {
    return `This action returns all surfaces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surface`;
  }

  update(id: number, updateSurfaceDto: UpdateSurfaceDto) {
    return `This action updates a #${id} surface`;
  }

  remove(id: number) {
    return `This action removes a #${id} surface`;
  }
}
