// space-edit-requests/space-edit-requests.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SpaceEditRequestsService } from './space-edit-requests.service';
import { CreateSpaceEditRequestDto } from './dto/create-space-edit-request.dto';
import { UpdateSpaceEditRequestDto } from './dto/update-space-edit-request.dto';

@Controller('api/space-edit-requests')
export class SpaceEditRequestsController {
  constructor(private readonly spaceEditRequestsService: SpaceEditRequestsService) {}

  @Get()
  async findAll() {
    const spaceEditRequests = await this.spaceEditRequestsService.findAll();
    return { message: 'Space Edit Requests retrieved successfully', responseData: spaceEditRequests };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const spaceEditRequest = await this.spaceEditRequestsService.findOne(id);
    return { message: 'Space Edit Request found successfully', responseData: spaceEditRequest };
  }

  @Post()
  async create(@Body() createSpaceEditRequestDto: CreateSpaceEditRequestDto) {
    createSpaceEditRequestDto.state = 1;
    const newSpaceEditRequest = await this.spaceEditRequestsService.create(createSpaceEditRequestDto);
    return { message: 'Space Edit Request created successfully', responseData: newSpaceEditRequest };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSpaceEditRequestDto: UpdateSpaceEditRequestDto) {
    
    updateSpaceEditRequestDto.state ? updateSpaceEditRequestDto.state : updateSpaceEditRequestDto.state = 2 ;
    const updatedSpaceEditRequest = await this.spaceEditRequestsService.update(id, updateSpaceEditRequestDto);
    return { message: 'Space Edit Request updated successfully', responseData: updatedSpaceEditRequest };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedSpaceEditRequest = await this.spaceEditRequestsService.delete(id);
    return { message: 'Space Edit Request deleted successfully', responseData: deletedSpaceEditRequest };
  }
}
