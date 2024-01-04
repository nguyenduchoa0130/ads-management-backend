import { Module } from '@nestjs/common';
import { SurfacesService } from './surfaces.service';
import { SurfacesController } from './surfaces.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Surface, SurfaceSchema } from 'src/shared/schemas/surface.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Surface.name, schema: SurfaceSchema }])],

  controllers: [SurfacesController],
  providers: [SurfacesService]
})
export class SurfacesModule {}
