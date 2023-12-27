import { Test, TestingModule } from '@nestjs/testing';
import { SpaceFormatsService } from './space-formats.service';

describe('SpaceFormatsService', () => {
  let service: SpaceFormatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceFormatsService],
    }).compile();

    service = module.get<SpaceFormatsService>(SpaceFormatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
