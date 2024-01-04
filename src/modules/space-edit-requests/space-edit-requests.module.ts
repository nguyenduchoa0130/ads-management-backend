import { Module } from '@nestjs/common';
import { SpaceEditRequestsService } from './space-edit-requests.service';
import { SpaceEditRequestsController } from './space-edit-requests.controller';

@Module({
  controllers: [SpaceEditRequestsController],
  providers: [SpaceEditRequestsService]
})
export class SpaceEditRequestsModule {}
