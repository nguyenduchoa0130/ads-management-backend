// wards.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete, Req } from '@nestjs/common';
import { WardsService } from './wards.service';
import { CreateWardDto } from './dto/create-ward.dto';
import { UpdateWardDto } from './dto/update-ward.dto';

@Controller('api/wards')
export class WardsController {
  constructor(private readonly wardsService: WardsService) {}

  @Get()
  async findAll() {
    const responseData = await this.wardsService.findAll();
    return { responseData, message: 'Wards retrieved successfully' };
  }

  @Post()
  async create(@Body() createWardDto: CreateWardDto) {
    const responseData = await this.wardsService.create(createWardDto);
    return { responseData, message: 'Ward created successfully' };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateWardDto: UpdateWardDto) {
    const responseData = await this.wardsService.update(id, updateWardDto);
    return { responseData, message: 'Ward updated successfully' };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const responseData = await this.wardsService.delete(id);
    return { responseData, message: 'Ward deleted successfully' };
  }
}
