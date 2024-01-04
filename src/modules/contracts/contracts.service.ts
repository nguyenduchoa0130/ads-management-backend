// contracts.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from 'src/shared/schemas/contract.schema';

@Injectable()
export class ContractsService {
  constructor(
    @InjectModel(Contract.name) private readonly contractModel: Model<Contract>,
  ) {}

  findAll() {
    return this.contractModel.find().populate('surface company').exec();
  }

  findOne(id: string) {
    return this.contractModel.findById(id).populate('surface company').exec();
  }

  create(createContractDto: CreateContractDto) {
    const newContract = new this.contractModel(createContractDto);
    return newContract.save();
  }

  async update(id: string, updateContractDto: UpdateContractDto) {
    const existingContract = await this.contractModel.findByIdAndUpdate(
      id,
      updateContractDto,
      { new: true },
    ).populate('surface company').exec();

    if (!existingContract) {
      throw new NotFoundException(`Contract with id ${id} not found`);
    }

    return existingContract;
  }

  async delete(id: string) {
    const deletedContract = await this.contractModel.findByIdAndDelete(id);
    if (!deletedContract) {
      throw new NotFoundException(`Contract with id ${id} not found`);
    }
    return deletedContract;
  }
}

