import { IsOptional, Length, Matches, IsNumber } from 'class-validator';

export class UpdateDistrictDTO {
  @IsOptional()
  @Length(1, 30, { message: 'Tên quận có độ dài tối đa 30 ký tự' })
  @Matches(/^[\w\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/, {
    message: 'Tên quận không hợp lệ',
  })
  name?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Vĩ độ phải là số' })
  lat?: number;

  @IsOptional()
  @IsNumber({}, { message: 'Kinh độ phải là số' })
  long?: number;
}
