import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpaceTypeService } from './space-type.service';
import { CreateSpaceTypeDto } from './dto/create-space-type.dto';
import { UpdateSpaceTypeDto } from './dto/update-space-type.dto';

@Controller('space-type')
export class SpaceTypeController {
  constructor(private readonly spaceTypeService: SpaceTypeService) {}

  @Post()
  create(@Body() createSpaceTypeDto: CreateSpaceTypeDto) {
    return this.spaceTypeService.create(createSpaceTypeDto);
  }

  @Get()
  findAll() {
    return this.spaceTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spaceTypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpaceTypeDto: UpdateSpaceTypeDto) {
    return this.spaceTypeService.update(id, updateSpaceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spaceTypeService.remove(id);
  }
}
