import { Module } from '@nestjs/common';
import { SpaceTypeService } from './space-type.service';
import { SpaceTypeController } from './space-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SpaceTypeSchema } from './entities/space-type.entity';

@Module({
  imports: [MongooseModule.forFeature([{name:'SpaceType', schema: SpaceTypeSchema}])],
  controllers: [SpaceTypeController],
  providers: [SpaceTypeService]
})
export class SpaceTypeModule {}
