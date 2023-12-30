import { Report } from './entities/report.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Model } from 'mongoose';

@Injectable()
export class ReportService {
  constructor(@InjectModel(Report.name) private readonly reportModel: Model<Report>) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = new this.reportModel(createReportDto);
    return await report.save();
  }

  async findAll(): Promise<Report[]> {
    return await this.reportModel.find().exec();
  }

  async findOne(id: string): Promise<Report | null> {
    return await this.reportModel.findById(id).exec();
  }

  async update(id: string, updateReportDto: UpdateReportDto): Promise<Report | null> {
    return await this.reportModel.findByIdAndUpdate(id, updateReportDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.reportModel.findByIdAndDelete(id).exec();
  }

}
