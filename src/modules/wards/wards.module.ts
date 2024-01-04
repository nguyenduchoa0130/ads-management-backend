import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WardsController } from './wards.controller';
import { WardsService } from './wards.service';
import { Ward, WardSchema } from 'src/shared/schemas/ward.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Ward.name, schema: WardSchema}])],
  controllers: [WardsController],
  providers: [WardsService],
  exports: [],
})
export class WardsModule {}
