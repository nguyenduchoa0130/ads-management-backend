import { Module } from '@nestjs/common';
import { SurfaceTypeService } from './surface_type.service';
import { SurfaceTypeController } from './surface_type.controller';

@Module({
  controllers: [SurfaceTypeController],
  providers: [SurfaceTypeService]
})
export class SurfaceTypeModule {}
