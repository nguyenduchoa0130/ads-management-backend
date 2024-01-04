import { IsOptional, Length, Matches, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDistrictDTO {
  @IsOptional()
  @Length(1, 30, { message: 'Tên quận có độ dài tối đa 30 ký tự' })
  @Matches(/^[\w\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/, {
    message: 'Tên quận không hợp lệ',
  })
  @ApiProperty({ description: 'Tên quận (tối đa 30 ký tự)', required: false })
  name?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Vĩ độ phải là số' })
  @ApiProperty({ description: 'Vĩ độ', type: Number, required: false })
  lat?: number;

  @IsOptional()
  @IsNumber({}, { message: 'Kinh độ phải là số' })
  @ApiProperty({ description: 'Kinh độ', type: Number, required: false })
  long?: number;
}
