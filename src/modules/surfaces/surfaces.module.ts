import { Module } from '@nestjs/common';
import { SurfacesService } from './surfaces.service';
import { SurfacesController } from './surfaces.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Surface, SurfaceSchema } from 'src/shared/schemas/surface.schema';
import { MulterModule } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multer.config';

@Module({
  imports: [MongooseModule.forFeature([{ name: Surface.name, schema: SurfaceSchema }]), MulterModule.register(multerConfig)],

  controllers: [SurfacesController],
  providers: [SurfacesService]
})
export class SurfacesModule {}
