import { Transform } from 'class-transformer';
import { IsMongoId, IsString } from 'class-validator';
import { SafeMongoIdTransform } from '../transforms/safe-mongo-id.transform';

export class OnlyMongoIdParamsDTO {
  @IsMongoId()
  @IsString()
  @Transform((value) => SafeMongoIdTransform(value))
  id: string;
}
