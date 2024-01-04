// surface-edit-requests/surface-edit-requests.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SurfaceEditRequestsController } from './surface-edit-requests.controller';
import { SurfaceEditRequestsService } from './surface-edit-requests.service';
import { SurfaceEditRequest, SurfaceEditRequestSchema } from 'src/shared/schemas/surface-edit-request.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SurfaceEditRequest.name, schema: SurfaceEditRequestSchema },
    ]),
  ],
  controllers: [SurfaceEditRequestsController],
  providers: [SurfaceEditRequestsService],
})
export class SurfaceEditRequestsModule {}
