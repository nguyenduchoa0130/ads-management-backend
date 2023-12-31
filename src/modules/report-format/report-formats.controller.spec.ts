import { Test, TestingModule } from '@nestjs/testing';
import { ReportFormatsController } from './report-formats.controller';
import { ReportFormatsService } from './report-formats.service';

describe('ReportFormatsController', () => {
  let controller: ReportFormatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportFormatsController],
      providers: [ReportFormatsService],
    }).compile();

    controller = module.get<ReportFormatsController>(ReportFormatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
