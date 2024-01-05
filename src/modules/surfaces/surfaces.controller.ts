// surfaces.controller.ts
import { Controller, Get, Post, Body, Put, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, BadRequestException } from '@nestjs/common';
import { SurfacesService } from './surfaces.service';
import { CreateSurfaceDto } from './dto/create-surface.dto';
import { UpdateSurfaceDto } from './dto/update-surface.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multer.config';

@Controller('api/surfaces')
export class SurfacesController {
  constructor(private readonly surfacesService: SurfacesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img_url', multerConfig))
  async create(@UploadedFile() file, @Body() createSurfaceDto: CreateSurfaceDto) {

    if(file){
      createSurfaceDto.img_url = file.path;
    }else {
      throw new BadRequestException('img_url not found')
    }
    
    
    const responseData = await this.surfacesService.create(createSurfaceDto);
    return { message: 'Surface created successfully', responseData: responseData };
  }

  @Get()
  async findAll() {
    const responseData = await this.surfacesService.findAll();
    return { message: 'Surfaces retrieved successfully', responseData: responseData };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const responseData = await this.surfacesService.findOne(id);
    return { message: 'Surface found successfully', responseData: responseData };
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('img_url', multerConfig))
  async update(@UploadedFile() file,@Param('id') id: string, @Body() updateSurfaceDto: UpdateSurfaceDto) {

   
    updateSurfaceDto.img_url = file.path;

    const responseData = await this.surfacesService.update(id, updateSurfaceDto);
    return { message: 'Surface updated successfully', responseData: responseData };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const responseData = await this.surfacesService.delete(id);
    return { message: 'Surface deleted successfully', responseData: responseData };
  }
}
