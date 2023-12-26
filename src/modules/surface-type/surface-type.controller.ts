import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { SurfaceTypeService } from './surface-type.service';
import { CreateSurfaceTypeDto } from './dto/create-surface_type.dto';
import { UpdateSurfaceTypeDto } from './dto/update-surface_type.dto';
import { SurfaceType } from './surface-type.schema';

@Controller('surface-type')
export class SurfaceTypeController {
  constructor(private readonly surfaceTypeService: SurfaceTypeService) {}

  @Post()
  create(@Body() createSurfaceTypeDto: CreateSurfaceTypeDto) {
   
    const result =  this.surfaceTypeService.create(createSurfaceTypeDto);

    if(result){
      return {
        message: "TẠO MỚI LOẠI BIỂN QUẢNG CÁO THÀNH CÔNG",
        status: "success",
        
      }
    }

    
  }

  @Get()
  findAll() {
    return this.surfaceTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res){
    const data = await this.surfaceTypeService.findOne(id);
    return res.json({responseData: data, status: "success"});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurfaceTypeDto: UpdateSurfaceTypeDto) {
    if(this.surfaceTypeService.update(id, updateSurfaceTypeDto)){
      return {
        message: "CẬP NHẬT LOẠI BIỂN QUẢNG CÁO THÀNH CÔNG",
        status: "success",
        

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
