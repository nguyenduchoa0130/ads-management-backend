import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurfacesService } from './surfaces.service';
import { CreateSurfaceDto } from './dto/create-surface.dto';
import { UpdateSurfaceDto } from './dto/update-surface.dto';

@Controller('api/surfaces')
export class SurfacesController {
  constructor(private readonly surfacesService: SurfacesService) {}

  @Post()
  create(@Body() createSurfaceDto: CreateSurfaceDto) {
    return this.surfacesService.create(createSurfaceDto);
  }

  @Get()
  findAll() {
    return this.surfacesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surfacesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurfaceDto: UpdateSurfaceDto) {
    return this.surfacesService.update(+id, updateSurfaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surfacesService.remove(+id);
  }
}
