import { Test, TestingModule } from '@nestjs/testing';
import { ReportFormatsService } from './report-formats.service';

describe('ReportFormatsService', () => {
  let service: ReportFormatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportFormatsService],
    }).compile();

    service = module.get<ReportFormatsService>(ReportFormatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
