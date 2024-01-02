import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { SpaceFormatsService } from './space-formats.service';
import { CreateSpaceFormatDto } from './dto/create-space-format.dto';
import { UpdateSpaceFormatDto } from './dto/update-space-format.dto';

@Controller('api/space-format')
export class SpaceFormatsController {
  constructor(private readonly spaceFormatsService: SpaceFormatsService) {}

  @Post()
  async create(@Body() createSpaceFormatDto: CreateSpaceFormatDto, @Res() res) {
    try {
      const createdSpaceFormat = await this.spaceFormatsService.create(createSpaceFormatDto);
      return res.status(HttpStatus.CREATED).json({ message: 'Space format created successfully', responseData: createdSpaceFormat });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error creating space format', responseData: null });
    }
  }

  @Get()
  async findAll(@Res() res) {
    try {
      const data = await this.spaceFormatsService.findAll();
      return res.json({ message: 'Space formats retrieved successfully', responseData: data });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error retrieving space formats', responseData: null });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    try {
      const spaceFormat = await this.spaceFormatsService.findOne(id);
      if (!spaceFormat) {
        return res.status(HttpStatus.NOT_FOUND).json({ message: 'Space format not found', responseData: null });
      }
      return res.json({ message: 'Space format retrieved successfully', responseData: spaceFormat });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error retrieving space format', responseData: null });
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSpaceFormatDto: UpdateSpaceFormatDto, @Res() res) {
    try {
      const updatedSpaceFormat = await this.spaceFormatsService.update(id, updateSpaceFormatDto);
      return res.json({ message: 'Space format updated successfully', responseData: updatedSpaceFormat });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error updating space format', responseData: null });
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    try {
      await this.spaceFormatsService.remove(id);
      return res.json({ message: 'Space format deleted successfully', responseData: null });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error deleting space format', responseData: null });
    }
  }
}
