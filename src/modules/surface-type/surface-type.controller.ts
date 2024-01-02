import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { SurfaceTypeService } from './surface-type.service';
import { CreateSurfaceTypeDto } from './dto/create-surface_type.dto';
import { UpdateSurfaceTypeDto } from './dto/update-surface_type.dto';
import { SurfaceType } from '../../shared/schemas/surface-type.schema';

@Controller('api/surface-type')
export class SurfaceTypeController {
  constructor(private readonly surfaceTypeService: SurfaceTypeService) { }

  @Post()
  async create(@Body() createSurfaceTypeDto: CreateSurfaceTypeDto) {

    const result = await this.surfaceTypeService.create(createSurfaceTypeDto);

    if (result) {
      return {
        message: "TẠO MỚI LOẠI BIỂN QUẢNG CÁO THÀNH CÔNG",
        status: "success",
        responseData: result,
      }
    }


  }

  @Get()
  async findAll(@Res() res) {

    const data = await this.surfaceTypeService.findAll();
    return await res.json({ "responseData": data });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    const data = await this.surfaceTypeService.findOne(id);
    return res.json({ responseData: data, status: "success" });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSurfaceTypeDto: UpdateSurfaceTypeDto) {
    const result = await this.surfaceTypeService.update(id, updateSurfaceTypeDto)
    if (result) {
      return {
        message: "CẬP NHẬT LOẠI BIỂN QUẢNG CÁO THÀNH CÔNG",
        status: "success",
        responseData: result

      }
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.surfaceTypeService.remove(id);
    return {
      message: "XOÁ LOẠI BIỂN QUẢNG CÁO THÀNH CÔNG",
      status: "success",


    }
  }
}
