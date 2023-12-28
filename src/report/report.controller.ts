import { Controller, Get, Post, Body, Param, Patch, Delete, Res } from '@nestjs/common';
import { ReportService } from './report.service';
import { Response } from 'express';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Controller('api/report')
export class ReportController {
  constructor(private readonly ReportService: ReportService) {}

  @Post()
  async create(@Body() createReportDto: CreateReportDto, @Res() res: Response) {
    try {
      const report = await this.ReportService.create(createReportDto);
      res.json({ responseData: report, message: 'Report created successfully.' });
    } catch (error) {
      res.status(500).json({ responseData: null, message: 'Error creating report.' });
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const reports = await this.ReportService.findAll();
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
  async update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto, @Res() res: Response) {
    try {
      const updatedReport = await this.ReportService.update(id, updateReportDto);
      if (updatedReport) {
        res.json({ responseData: updatedReport, message: 'Report updated successfully.' });
      } else {
        res.status(404).json({ responseData: null, message: 'Report not found.' });
      }
    } catch (error) {
      res.status(500).json({ responseData: null, message: 'Error updating report.' });
    }
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
