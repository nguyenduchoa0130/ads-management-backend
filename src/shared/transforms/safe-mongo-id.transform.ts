import { BadRequestException } from '@nestjs/common';
import * as mongoose from 'mongoose';

export const SafeMongoIdTransform = ({ value }) => {
  try {
    if (
      mongoose.Types.ObjectId.isValid(value) &&
      new mongoose.Types.ObjectId(value).toString() === value
    ) {
      return value;
    }
    throw new BadRequestException('Id không hợp lệ');
  } catch (error) {
    throw new BadRequestException('Id không hợp lệ');
  }
};
