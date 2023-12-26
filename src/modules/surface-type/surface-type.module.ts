
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SurfaceTypeService } from './surface-type.service';
import { SurfaceTypeController } from './surface-type.controller';
import { SurfaceType, SurfaceTypeSchema } from './surface-type.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: SurfaceType.name, schema: SurfaceTypeSchema}])],
  controllers: [SurfaceTypeController],
  providers: [SurfaceTypeService]
})
export class SurfaceTypeModule {}
