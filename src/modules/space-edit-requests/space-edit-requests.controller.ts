import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpaceEditRequestsService } from './space-edit-requests.service';
import { CreateSpaceEditRequestDto } from './dto/create-space-edit-request.dto';
import { UpdateSpaceEditRequestDto } from './dto/update-space-edit-request.dto';

@Controller('space-edit-requests')
export class SpaceEditRequestsController {
  constructor(private readonly spaceEditRequestsService: SpaceEditRequestsService) {}

  @Post()
  create(@Body() createSpaceEditRequestDto: CreateSpaceEditRequestDto) {
    return this.spaceEditRequestsService.create(createSpaceEditRequestDto);
  }

  @Get()
  findAll() {
    return this.spaceEditRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spaceEditRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpaceEditRequestDto: UpdateSpaceEditRequestDto) {
    return this.spaceEditRequestsService.update(+id, updateSpaceEditRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spaceEditRequestsService.remove(+id);
  }
}
