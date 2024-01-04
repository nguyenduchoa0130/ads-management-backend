import { Injectable } from '@nestjs/common';
import { CreateSpaceEditRequestDto } from './dto/create-space-edit-request.dto';
import { UpdateSpaceEditRequestDto } from './dto/update-space-edit-request.dto';

@Injectable()
export class SpaceEditRequestsService {
  create(createSpaceEditRequestDto: CreateSpaceEditRequestDto) {
    return 'This action adds a new spaceEditRequest';
  }

  findAll() {
    return `This action returns all spaceEditRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spaceEditRequest`;
  }

  update(id: number, updateSpaceEditRequestDto: UpdateSpaceEditRequestDto) {
    return `This action updates a #${id} spaceEditRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} spaceEditRequest`;
  }
}
