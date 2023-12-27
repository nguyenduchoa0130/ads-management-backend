import { IsNotEmpty, IsNumber, Length, Matches } from 'class-validator';

export class CreateDistrictDTO {
  @IsNotEmpty({ message: 'Tên quận không được để trống' })
  @Length(1, 30, { message: 'Tên quận có độ dài tối đa 30 ký tự' })
  @Matches(/^[\w\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/, {
    message: 'Tên quận không hợp lệ',
  })
  name: string;

  @IsNotEmpty({ message: 'Vĩ độ không được để trống' })
  @IsNumber({}, { message: 'Vĩ độ phải là số' })
  lat: number;

  @IsNotEmpty({ message: 'Kinh độ không được để trống' })
  @IsNumber({}, { message: 'Kinh độ phải là số' })
  lng: number;
}
