import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';


export class CreateSpaceDto {
  @Expose()
  @IsNotEmpty()
  lat: string

  @Expose()
  @IsNotEmpty()
  long: string

  @Expose()
  @IsNotEmpty()
  type: string

  @Expose()
  @IsNotEmpty()
  format: string

  @Expose()
  @IsNotEmpty()
  ward: string

  @Expose()
  @IsNotEmpty()
  address: string

  @Exclude()
  _id: string


}
