// contracts.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';

@Controller('api/contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  private formatResponse(message: string, responseData?: any) {
    return { message: message, responseData };
  }

  @Get()
  async findAll() {
    const contracts = await this.contractsService.findAll();
    return this.formatResponse('Contracts retrieved successfully', contracts);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const contract = await this.contractsService.findOne(id);
    return this.formatResponse('Contract found successfully', contract);
  }

  @Post()
  async create(@Body() createContractDto: CreateContractDto) {
    const newContract = await this.contractsService.create(createContractDto);
    return this.formatResponse('Contract created successfully', newContract);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateContractDto: UpdateContractDto) {
    const updatedContract = await this.contractsService.update(id, updateContractDto);
    return this.formatResponse('Contract updated successfully', updatedContract);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedContract = await this.contractsService.delete(id);
    return this.formatResponse('Contract deleted successfully', deletedContract);
  }
}
