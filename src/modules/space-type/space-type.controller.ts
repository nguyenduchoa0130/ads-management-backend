import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { SpaceTypeService } from './space-type.service';
import { CreateSpaceTypeDto } from './dto/create-space-type.dto';
import { UpdateSpaceTypeDto } from './dto/update-space-type.dto';


@Controller('api/space-type')
export class SpaceTypeController {
  constructor(private readonly spaceTypeService: SpaceTypeService) { }

  @Post()
  create(@Body() createSpaceTypeDto: CreateSpaceTypeDto, @Res() res) {
    const result = this.spaceTypeService.create(createSpaceTypeDto);
    if(result){
      return res.json({
        message: "TẠO MỚI LOẠI BIỂN QUẢNG CÁO THÀNH CÔNG",
        status: "success",
        responseData: result,
      });
    }
    

  }

  @Get()
  async findAll(@Res() res) {
    const data = await this.spaceTypeService.findAll();
    return await res.json({ "responseData": data });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spaceTypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpaceTypeDto: UpdateSpaceTypeDto, @Res() res) {
    const result =  this.spaceTypeService.update(id, updateSpaceTypeDto);
    if(result){
      return res.json({
        message: "CẬP NHẬT LOẠI BIỂN QUẢNG CÁO THÀNH CÔNG",
        status: "success",
        responseData: result,
      });
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spaceTypeService.remove(id);
  }
}
