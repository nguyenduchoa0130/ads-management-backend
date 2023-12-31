// surface-edit-requests.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SurfaceEditRequestsService } from './surface-edit-requests.service';
import { CreateSurfaceEditRequestDto } from './dto/create-surface-edit-request.dto';
import { UpdateSurfaceEditRequestDto } from './dto/update-surface-edit-request.dto';
import { multerConfig } from 'src/config/multer.config';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/surface-edit-requests')
export class SurfaceEditRequestsController {
  constructor(private readonly surfaceEditRequestsService: SurfaceEditRequestsService) {}

  @Get()
  async findAll() {
    const surfaceEditRequests = await this.surfaceEditRequestsService.findAll();
    return { message: 'Surface Edit Requests retrieved successfully', responseData: surfaceEditRequests };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const surfaceEditRequest = await this.surfaceEditRequestsService.findOne(id);
    return { message: 'Surface Edit Request found successfully', responseData: surfaceEditRequest };
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async create(@UploadedFile() file,@Body() createSurfaceEditRequestDto: CreateSurfaceEditRequestDto) {
    createSurfaceEditRequestDto.state = 1;
    //createSurfaceEditRequestDto.request_date = new Date();

    if(file){
      createSurfaceEditRequestDto.img_url = file.path;
    }else if(!createSurfaceEditRequestDto.img_url) {
      createSurfaceEditRequestDto.img_url = '';
    }

    const newSurfaceEditRequest = await this.surfaceEditRequestsService.create(createSurfaceEditRequestDto);
    return { message: 'Surface Edit Request created successfully', responseData: newSurfaceEditRequest };
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async update(@Param('id') id: string, @Body() updateSurfaceEditRequestDto: UpdateSurfaceEditRequestDto,@UploadedFile() file) {
    const updatedSurfaceEditRequest = await this.surfaceEditRequestsService.update(id, updateSurfaceEditRequestDto);
    return { message: 'Surface Edit Request updated successfully', responseData: updatedSurfaceEditRequest };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedSurfaceEditRequest = await this.surfaceEditRequestsService.delete(id);
    return { message: 'Surface Edit Request deleted successfully', responseData: deletedSurfaceEditRequest };
  }
}
