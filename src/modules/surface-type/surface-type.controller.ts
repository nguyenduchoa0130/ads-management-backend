import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurfaceTypeService } from './surface-type.service';
import { CreateSurfaceTypeDto } from './dto/create-surface_type.dto';
import { UpdateSurfaceTypeDto } from './dto/update-surface_type.dto';

@Controller('surface-type')
export class SurfaceTypeController {
  constructor(private readonly surfaceTypeService: SurfaceTypeService) {}

  @Post()
  create(@Body() createSurfaceTypeDto: CreateSurfaceTypeDto) {
   
    return this.surfaceTypeService.create(createSurfaceTypeDto);
  }

  @Get()
  findAll() {
    return this.surfaceTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surfaceTypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurfaceTypeDto: UpdateSurfaceTypeDto) {
    return this.surfaceTypeService.update(id, updateSurfaceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surfaceTypeService.remove(id);
  }
}
