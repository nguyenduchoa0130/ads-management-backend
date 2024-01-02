import { Module } from '@nestjs/common';
import { SpaceFormatsService } from './space-formats.service';
import { SpaceFormatsController } from './space-formats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SpaceFormat, SpaceFormatSchema } from '../../shared/schemas/space-format.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: SpaceFormat.name, schema: SpaceFormatSchema }])],
  controllers: [SpaceFormatsController],
  providers: [SpaceFormatsService],
})
export class SpaceFormatsModule {}
