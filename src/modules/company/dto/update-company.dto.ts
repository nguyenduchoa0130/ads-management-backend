import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  readonly phone: string;
  readonly email: string;
  readonly address: string;
  readonly name: string;
}
