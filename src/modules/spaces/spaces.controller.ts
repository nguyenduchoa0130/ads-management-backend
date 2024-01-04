import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';

@Controller('api/spaces')
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  @Get()
  async findAll() {
    const responseData = await this.spacesService.findAll();
    return { message: 'Spaces retrieved successfully', responseData: responseData };
  }

  @Post()
  async create(@Body() createSpaceDto: CreateSpaceDto) {
    const responseData = await this.spacesService.create(createSpaceDto);
    return { message: 'Space created successfully', responseData: responseData };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSpaceDto: UpdateSpaceDto) {
    const responseData = await this.spacesService.update(id, updateSpaceDto);
    return { message: 'Space updated successfully', responseData: responseData };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const responseData = await this.spacesService.delete(id);
    return { message: 'Space deleted successfully', responseData: responseData };
  }
}
