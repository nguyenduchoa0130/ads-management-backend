import { Test, TestingModule } from '@nestjs/testing';
import { SurfaceTypeController } from './surface_type.controller';
import { SurfaceTypeService } from './surface_type.service';

describe('SurfaceTypeController', () => {
  let controller: SurfaceTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurfaceTypeController],
      providers: [SurfaceTypeService],
    }).compile();

    controller = module.get<SurfaceTypeController>(SurfaceTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
