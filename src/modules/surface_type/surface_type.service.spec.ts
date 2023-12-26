import { Test, TestingModule } from '@nestjs/testing';
import { SurfaceTypeService } from './surface_type.service';

describe('SurfaceTypeService', () => {
  let service: SurfaceTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurfaceTypeService],
    }).compile();

    service = module.get<SurfaceTypeService>(SurfaceTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
