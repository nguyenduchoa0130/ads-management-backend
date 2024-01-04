import { Module } from '@nestjs/common';
import { SpaceEditRequestsService } from './space-edit-requests.service';
import { SpaceEditRequestsController } from './space-edit-requests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SpaceEditRequest, SpaceEditRequestSchema } from 'src/shared/schemas/space-edit-request.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SpaceEditRequest.name, schema: SpaceEditRequestSchema },
    ]),
  ],
  controllers: [SpaceEditRequestsController],
  providers: [SpaceEditRequestsService]
})
export class SpaceEditRequestsModule {}
