import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Report, ReportSchema } from '../../shared/schemas/report.schema';
import { ReportController } from './report.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }])],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
