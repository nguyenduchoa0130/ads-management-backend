import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { OnlyMongoIdParamsDTO } from 'src/shared/dtos/only-mongo-id-params.dto';
import { DistrictsService } from './districts.service';
import { CreateDistrictDTO } from './dtos/create-district.dto';

@Controller('api/districts')
export class DistrictsController {
  constructor(private districtsService: DistrictsService) {}

  @Get(':id')
  async getById(@Param(new ValidationPipe()) params: OnlyMongoIdParamsDTO) {
    const district = await this.districtsService.findDistrictById(params.id);
    return {
      status: 'success',
      responseData: district,
    };
  }

  @Get()
  async getAll() {
    const districts = await this.districtsService.getAll();
    return {
      status: 'success',
      responseData: districts,
    };
  }

  @Post()
  async create(
    @Body(new ValidationPipe({ stopAtFirstError: true, whitelist: true }))
    body: CreateDistrictDTO,
  ) {
    const existedDistrict = await this.districtsService.findDistrictByName(
      body.name,
    );
    if (existedDistrict) {
      throw new BadRequestException('Tên quận đã tồn tại');
    }
    const newDistrict = await this.districtsService.create(body);
    return {
      status: 'success',
      responseData: newDistrict,
    };
  }

  @Patch(':id')
  async update(
    @Param(new ValidationPipe()) params: OnlyMongoIdParamsDTO,
    @Body(new ValidationPipe({ stopAtFirstError: true, whitelist: true })) body,
  ) {
    const district = await this.districtsService.findDistrictById(params.id);
    if (!district) {
      throw new NotFoundException(`Không tồn tại quận có ID: ${params.id}`);
    }
    await this.districtsService.update(params.id, body);
    const updatedDistrict = await this.districtsService.findDistrictById(
      params.id,
    );
    return {
      status: 'success',
      responseData: updatedDistrict,
    };
  }

  @Delete(':id')
  async remove(@Param(new ValidationPipe()) params: OnlyMongoIdParamsDTO) {
    const district = await this.districtsService.findDistrictById(params.id);
    if (!district) {
      throw new NotFoundException(`Không tồn tại quận có ID: ${params.id}`);
    }
    await this.districtsService.remove(params.id);
    return { status: 'success' };
  }
}
