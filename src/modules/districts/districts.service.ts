import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { District, DistrictDocument } from 'src/shared/schemas/district.schema';
import { CreateDistrictDTO } from './dtos/create-district.dto';
import { UpdateDistrictDTO } from './dtos/update-district.dto';

@Injectable()
export class DistrictsService {
  constructor(
    @InjectModel(District.name) private districtModel: Model<DistrictDocument>,
  ) {}

  async findDistrictByName(name: string): Promise<District> {
    return this.districtModel.findOne({
      name: { $regex: new RegExp(`^${name}$`, 'i') },
    });
  }

  async create(data: CreateDistrictDTO): Promise<District> {
    return this.districtModel.create(data);
  }

  async getAll(): Promise<District[]> {
    return this.districtModel.aggregate([
      {
        $lookup: {
          from: 'wards',
          localField: '_id',
          foreignField: 'district',
          as: 'wards',
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          numberOfWards: { $size: '$wards' },
          lng: 1,
          lat: 1,
        },
      },
    ]);
  }

  async findDistrictById(id: string): Promise<District> {
    const districts = await this.districtModel.aggregate([
      {
        $match: { _id: id },
      },
      {
        $lookup: {
          from: 'wards',
          localField: '_id',
          foreignField: 'district',
          as: 'wards',
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          numberOfWards: { $size: '$wards' },
          lng: 1,
          lat: 1,
        },
      },
    ]);
    return districts && districts.length ? districts[0] : null;
  }

  async update(districtId: string, data: UpdateDistrictDTO): Promise<District> {
    return this.districtModel.findByIdAndUpdate(districtId, data, {
      new: true,
    });
  }

  async remove(districtId: string): Promise<void> {
    await this.districtModel.deleteOne({ _id: districtId });
  }
}
