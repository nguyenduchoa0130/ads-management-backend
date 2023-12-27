import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { District, DistrictSchema } from 'src/shared/schemas/district.schema';
import { DistrictsController } from './districts.controller';
import { DistrictsService } from './districts.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: District.name, schema: DistrictSchema },
    ]),
  ],
  controllers: [DistrictsController],
  providers: [DistrictsService],
  exports: [DistrictsService],
})
export class DistrictsModule {}
