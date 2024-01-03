import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ReportFormatsService } from './report-formats.service';
import { CreateReportFormatDto } from './dto/create-report-format.dto';
import { UpdateReportFormatDto } from './dto/update-report-format.dto';

@Controller('api/report-format')
export class ReportFormatsController {
  constructor(private readonly reportFormatsService: ReportFormatsService) {}

  @Post()
  create(@Body() createReportFormatDto: CreateReportFormatDto, @Res() res ) {
    const created =  this.reportFormatsService.create(createReportFormatDto);

    if(created) {
      return res.status(200).json({
        message: 'TẠO THÀNH CÔNG HÌNH THỨC REPORT' ,
        status: 'success',
        responseData: created
      });
    }
    
  }

  @Get()
  async findAll(@Res() res) {
    
    const data = await this.reportFormatsService.findAll();
    return await res.json({ responseData: data });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportFormatsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportFormatDto: UpdateReportFormatDto) {
    return this.reportFormatsService.update(id, updateReportFormatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportFormatsService.remove(id);
  }
}
