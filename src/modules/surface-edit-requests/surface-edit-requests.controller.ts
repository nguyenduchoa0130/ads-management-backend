import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurfaceEditRequestsService } from './surface-edit-requests.service';
import { CreateSurfaceEditRequestDto } from './dto/create-surface-edit-request.dto';
import { UpdateSurfaceEditRequestDto } from './dto/update-surface-edit-request.dto';

@Controller('surface-edit-requests')
export class SurfaceEditRequestsController {
  constructor(private readonly surfaceEditRequestsService: SurfaceEditRequestsService) {}

  @Post()
  create(@Body() createSurfaceEditRequestDto: CreateSurfaceEditRequestDto) {
    return this.surfaceEditRequestsService.create(createSurfaceEditRequestDto);
  }

  @Get()
  findAll() {
    return this.surfaceEditRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surfaceEditRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurfaceEditRequestDto: UpdateSurfaceEditRequestDto) {
    return this.surfaceEditRequestsService.update(+id, updateSurfaceEditRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surfaceEditRequestsService.remove(+id);
  }
}
