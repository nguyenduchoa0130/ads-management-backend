import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesController } from './spaces.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Space, SpaceSchema } from 'src/shared/schemas/space.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Space.name, schema: SpaceSchema }])],

  controllers: [SpacesController],
  providers: [SpacesService]
})
export class SpacesModule {}
