// surfaces.controller.ts
import { Controller, Get, Post, Body, Put, Patch, Param, Delete } from '@nestjs/common';
import { SurfacesService } from './surfaces.service';
import { CreateSurfaceDto } from './dto/create-surface.dto';
import { UpdateSurfaceDto } from './dto/update-surface.dto';

@Controller('api/surfaces')
export class SurfacesController {
  constructor(private readonly surfacesService: SurfacesService) {}

  @Post()
  async create(@Body() createSurfaceDto: CreateSurfaceDto) {
    const responseData = await this.surfacesService.create(createSurfaceDto);
    return { message: 'Surface created successfully', responseData };
  }

  @Get()
  async findAll() {
    const responseData = await this.surfacesService.findAll();
    return { message: 'Surfaces retrieved successfully', responseData };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const responseData = await this.surfacesService.findOne(id);
    return { message: 'Surface found successfully', responseData };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSurfaceDto: UpdateSurfaceDto) {
    const responseData = await this.surfacesService.update(id, updateSurfaceDto);
    return { message: 'Surface updated successfully', responseData };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const responseData = await this.surfacesService.delete(id);
    return { message: 'Surface deleted successfully', responseData };
  }
}
