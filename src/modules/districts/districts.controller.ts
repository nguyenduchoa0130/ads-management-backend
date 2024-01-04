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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiResponseOptions } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { OnlyMongoIdParamsDTO } from 'src/shared/dtos/only-mongo-id-params.dto';
import { DistrictsService } from './districts.service';
import { CreateDistrictDTO } from './dtos/create-district.dto';
import { UpdateDistrictDTO } from './dtos/update-district.dto';

@ApiTags('Districts') // Adding a tag for API documentation
@Controller('api/districts')
export class DistrictsController {
  constructor(private districtsService: DistrictsService) {}

  // GET /api/districts/:id
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get district by ID',
    type: CreateDistrictDTO,
  })
  @ApiResponse({ status: 404, description: 'District not found' })
  async getById(@Param(new ValidationPipe()) params: OnlyMongoIdParamsDTO) {
    const district = await this.districtsService.findDistrictById(params.id);
    if (!district) {
      throw new NotFoundException(`Không tồn tại quận có ID: ${params.id}`);
    }
    return { status: 'success', responseData: district };
  }

  // GET /api/districts
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get all districts',
    type: [CreateDistrictDTO],
  })
  async getAll() {
    const districts = await this.districtsService.getAll();
    return { status: 'success', responseData: districts };
  }

  // POST /api/districts
  @Post()
  @ApiResponse({
    status: 201,
    description: 'Create a new district',
    type: CreateDistrictDTO,
  })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
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
    return { status: 'success', responseData: newDistrict };
  }

  // PATCH /api/districts/:id
  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Update district by ID',
    type: CreateDistrictDTO,
  })
  @ApiResponse({ status: 404, description: 'District not found' })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  async update(
    @Param(new ValidationPipe()) params: OnlyMongoIdParamsDTO,
    @Body(new ValidationPipe({ stopAtFirstError: true, whitelist: true }))
    body: UpdateDistrictDTO,
  ) {
    const district = await this.districtsService.findDistrictById(params.id);
    if (!district) {
      throw new NotFoundException(`Không tồn tại quận có ID: ${params.id}`);
    }
    await this.districtsService.update(params.id, body);
    const updatedDistrict = await this.districtsService.findDistrictById(
      params.id,
    );
    return { status: 'success', responseData: updatedDistrict };
  }

  // DELETE /api/districts/:id
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete district by ID' })
  @ApiResponse({ status: 404, description: 'District not found' })
  async remove(@Param(new ValidationPipe()) params: OnlyMongoIdParamsDTO) {
    const district = await this.districtsService.findDistrictById(params.id);
    if (!district) {
      throw new NotFoundException(`Không tồn tại quận có ID: ${params.id}`);
    }
    await this.districtsService.remove(params.id);
    return { status: 'success' };
  }
}
