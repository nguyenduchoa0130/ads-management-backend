import { Controller, Get, Post, Body, Param, Patch, Delete, Res, Req, Query, UseInterceptors, UploadedFile, UploadedFiles, NotFoundException } from '@nestjs/common';
import { ReportService } from './report.service';
import { Response } from 'express';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { multerConfig } from 'src/config/multer-report.config';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('api/reports')
export class ReportController {
  constructor(private readonly ReportService: ReportService,) { }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'file_1', maxCount: 1 },
    { name: 'file_2', maxCount: 1 },
  ], multerConfig))
  async create(@UploadedFiles() files: { file_1?: Express.Multer.File[], file_2?: Express.Multer.File[] }, @Body() createReportDto: CreateReportDto) {
    try {


      if (files) {
        if (files.file_1[0]?.path) {
          createReportDto.img_url_1 = files.file_1[0]?.path;
        }
        if (files.file_2[0]?.path) {
          createReportDto.img_url_2 = files.file_2[0]?.path;
        }
      }

      if (createReportDto.type == 1) {
        createReportDto.space = createReportDto.object;
      } else {
        createReportDto.surface = createReportDto.object;
      }

      const report = await this.ReportService.create(createReportDto);
      return ({ responseData: report, message: 'Report created successfully.' });
    } catch (error) {
      throw new NotFoundException('Error creating report.');
    }
  }

  @Get()
  async findAll(@Query() req: any, @Res() res: Response) {
    try {
      const reports = await this.ReportService.findAll(req);

      res.json({ responseData: reports, message: 'Reports retrieved successfully.' });
    } catch (error) {
      res.status(500).json({ responseData: null, message: 'Error retrieving reports.' });
    }
  }

  @Get(':id')

  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const report = await this.ReportService.findOne(id);
      if (report) {
        res.json({ responseData: report, message: 'Report retrieved successfully.' });
      } else {
        res.status(404).json({ responseData: null, message: 'Report not found.' });
      }
    } catch (error) {
      res.status(500).json({ responseData: null, message: 'Error retrieving report.' });
    }
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'file_1', maxCount: 1 },
    { name: 'file_2', maxCount: 1 },
  ], multerConfig))
  async update(@Param('id') id: string, @UploadedFiles() files: { file_1?: Express.Multer.File[], file_2?: Express.Multer.File[] }, @Body() updateReportDto: UpdateReportDto) {
    // try {



    if (files) {

      if (files?.file_1?.length > 0) {
        updateReportDto.img_url_1 = files.file_1[0]?.path;
      }
      if (files?.file_2?.length > 0) {
        updateReportDto.img_url_2 = files.file_2[0]?.path;
      }
    }


    const updatedReport = await this.ReportService.update(id, updateReportDto);


    if (updatedReport) {
      
      
      return ({ responseData: updatedReport, message: 'Report updated successfully.' });
    } else {
      return ({ responseData: null, message: 'Report not found.' });
    }
    // } catch (error) {
    //   res.status(500).json({ responseData: null, message: 'Error updating report.' });
    // }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.ReportService.remove(id);
      res.json({ responseData: null, message: 'Report deleted successfully.' });
    } catch (error) {
      res.status(500).json({ responseData: null, message: 'Error deleting report.' });
    }
  }
}
