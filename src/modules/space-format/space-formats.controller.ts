import { Controller, Get, Post, Body, Patch, Param, Delete,Res } from '@nestjs/common';
import { SpaceFormatsService } from './space-formats.service';
import { CreateSpaceFormatDto } from './dto/create-space-format.dto';
import { UpdateSpaceFormatDto } from './dto/update-space-format.dto';

@Controller('api/space-format')
export class SpaceFormatsController {
  constructor(private readonly spaceFormatsService: SpaceFormatsService) {}

  @Post()
  create(@Body() createSpaceFormatDto: CreateSpaceFormatDto) {
    return this.spaceFormatsService.create(createSpaceFormatDto);
  }

  @Get()
  async findAll(@Res() res) {
    
    const data = await this.spaceFormatsService.findAll();
    return await res.json({ "responseData": data });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spaceFormatsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpaceFormatDto: UpdateSpaceFormatDto) {
    return this.spaceFormatsService.update(id, updateSpaceFormatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spaceFormatsService.remove(id);
  }
}
