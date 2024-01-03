// src/report-formats/report-formats.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportFormatDto } from './dto/create-report-format.dto';
import { UpdateReportFormatDto } from './dto/update-report-format.dto';
import { ReportFormat } from '../../shared/schemas/report-format.schema';


@Injectable()
export class ReportFormatsService {
  constructor(@InjectModel(ReportFormat.name) private reportFormatModel: Model<ReportFormat>) {}

  async create(reportFormatDto: CreateReportFormatDto): Promise<ReportFormat> {
    const newReportFormat = new this.reportFormatModel(reportFormatDto);
    return newReportFormat.save();
  }

  async findAll(): Promise<ReportFormat[]> {
    return this.reportFormatModel.find().exec();
  }

  async findOne(id: string): Promise<ReportFormat> {
    const reportFormat = await this.reportFormatModel.findById(id).exec();
    if (!reportFormat) {
      throw new NotFoundException('Report Format not found');
    }
    return reportFormat;
  }

  async update(id: string, updateReportFormatDto: UpdateReportFormatDto): Promise<ReportFormat> {
    const updatedFormat = await this.reportFormatModel.findByIdAndUpdate(id, updateReportFormatDto, { new: true }).exec();
    if (!updatedFormat) {
      throw new NotFoundException('Report Format not found');
    }
    return updatedFormat;
  }

  async remove(id: string) {
    const deletedFormat = await this.reportFormatModel.findByIdAndDelete(id).exec();
    if (!deletedFormat) {
      throw new NotFoundException('Report Format not found');
    }
    
  }
}
