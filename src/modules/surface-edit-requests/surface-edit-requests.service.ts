import { Injectable } from '@nestjs/common';
import { CreateSurfaceEditRequestDto } from './dto/create-surface-edit-request.dto';
import { UpdateSurfaceEditRequestDto } from './dto/update-surface-edit-request.dto';

@Injectable()
export class SurfaceEditRequestsService {
  create(createSurfaceEditRequestDto: CreateSurfaceEditRequestDto) {
    return 'This action adds a new surfaceEditRequest';
  }

  findAll() {
    return `This action returns all surfaceEditRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surfaceEditRequest`;
  }

  update(id: number, updateSurfaceEditRequestDto: UpdateSurfaceEditRequestDto) {
    return `This action updates a #${id} surfaceEditRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} surfaceEditRequest`;
  }
}
