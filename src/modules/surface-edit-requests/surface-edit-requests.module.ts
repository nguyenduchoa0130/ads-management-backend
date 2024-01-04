import { Module } from '@nestjs/common';
import { SurfaceEditRequestsService } from './surface-edit-requests.service';
import { SurfaceEditRequestsController } from './surface-edit-requests.controller';

@Module({
  controllers: [SurfaceEditRequestsController],
  providers: [SurfaceEditRequestsService]
})
export class SurfaceEditRequestsModule {}
