import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Model, ObjectId, Schema } from 'mongoose';
import { User } from 'src/shared/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto);
  }

  async findAll() {
    return await this.userModel.find().populate('create_by update_by').exec();


  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }
  findOneEmail(email: string) {
    return this.userModel.findOne({ email: email }).exec();
  }
  async findOneUsername(username: string) {
    return await this.userModel.findOne({ username: username }).exec();
  }

  async update(id:string, updateUserDto: UpdateUserDto) {
    return await (await this.userModel.findByIdAndUpdate(id, updateUserDto)).save();
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
