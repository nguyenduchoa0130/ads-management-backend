import { ReportFormat, ReportFormatSchema } from '../../shared/schemas/report-format.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ReportFormatsService } from './report-formats.service';
import { ReportFormatsController } from './report-formats.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: ReportFormat.name, schema: ReportFormatSchema }])],
  controllers: [ReportFormatsController],
  providers: [ReportFormatsService],
})
export class ReportFormatsModule {}
