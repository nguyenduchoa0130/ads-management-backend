import { Module } from '@nestjs/common';
import { SurfacesService } from './surfaces.service';
import { SurfacesController } from './surfaces.controller';

@Module({
  controllers: [SurfacesController],
  providers: [SurfacesService]
})
export class SurfacesModule {}
