import { Report } from '../../shared/schemas/report.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Model } from 'mongoose';
import { GmailService } from '../gmail/gmail.service';

@Injectable()
export class ReportService {
  constructor(@InjectModel(Report.name) private readonly reportModel: Model<Report>, private readonly gmailService: GmailService) { }

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = new this.reportModel(createReportDto);
    return await report.save();
  }

  async findAll(req): Promise<Report[]> {
    let query = this.reportModel.find();

    if (req._id) {
      query = query.where('_id').equals(req._id);
    }
    if (req.state) {
      query = query.where('state').equals(req.state);
    }
    if (req.surface) {
      query = query.where('surface').equals(req.surface);
    }

    if (req.search) {
      query = query.where('reporter').regex(new RegExp(req.search, 'i'));
    }
    return await query.populate('surface space report_format').exec();
  }

  async findOne(id: string): Promise<Report | null> {
    return await this.reportModel.findById(id).exec();
  }

  async update(id: string, updateReportDto: UpdateReportDto) {
    const updated = await this.reportModel.findByIdAndUpdate(id, updateReportDto, { new: true }).exec();





    const res = await this.gmailService.sendMail("tdhuy.it@gmail.com", 'THÔNG BÁO QUÁ TRÌNH XỬ LÝ BÁO CÁO ĐIỂM QUẢNG CÁO, BIỂN QUẢNG CÁO', './report', {
      reporterName: updated.reporter,
      reportType: updated.report_format,
      processingStatus: updated.state == 0 ? "Đang xử lý" : "Đã xử lý",
      processingMethod: updated.method
    });

    return updated;
  }

  async remove(id: string): Promise<void> {
    await this.reportModel.findByIdAndDelete(id).exec();
  }

}
