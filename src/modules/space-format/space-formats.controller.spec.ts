import { Test, TestingModule } from '@nestjs/testing';
import { SpaceFormatsController } from './space-formats.controller';
import { SpaceFormatsService } from './space-formats.service';

describe('SpaceFormatsController', () => {
  let controller: SpaceFormatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaceFormatsController],
      providers: [SpaceFormatsService],
    }).compile();

    controller = module.get<SpaceFormatsController>(SpaceFormatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
