// wards.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ward } from 'src/shared/schemas/ward.schema';
import { UpdateWardDto } from './dto/update-ward.dto';
import { CreateWardDto } from './dto/create-ward.dto';

@Injectable()
export class WardsService {
  constructor(@InjectModel(Ward.name) private readonly wardModel: Model<Ward>) { }

  findAll() {
    return this.wardModel.find().populate({
      path: 'district',
      model: 'District',
      select: ['name', 'lng', 'lat'] // Specify the fields you want to include from the Customer model
    }).exec();
  }

  create(createWardDto: CreateWardDto) {
    const newWard = new this.wardModel(createWardDto);
    return newWard.save();
  }

  async update(id: string, updateWardDto: UpdateWardDto) {
    const existingWard = await this.wardModel.findByIdAndUpdate(id, updateWardDto, { new: true });
    if (!existingWard) {
      throw new NotFoundException(`Ward with id ${id} not found`);
    }
    return existingWard;
  }

  async delete(id: string) {
    const deletedWard = await this.wardModel.findByIdAndDelete(id);
    if (!deletedWard) {
      throw new NotFoundException(`Ward with id ${id} not found`);
    }
    return deletedWard;
  }
}
