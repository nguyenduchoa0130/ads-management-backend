import { Module } from '@nestjs/common';
import { ContractsService } from './space-contracts.service';
import { ContractsController } from './space-contracts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SpaceContract, SpaceContractSchema } from 'src/shared/schemas/space-contract.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: SpaceContract.name, schema: SpaceContractSchema }])],
  controllers: [ContractsController],
  providers: [ContractsService]
})
export class SpaceContractsModule {}
