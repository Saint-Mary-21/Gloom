import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfessionalsService } from './professionals.service';
import { CreateProfessionalDto } from './dto/create-professional.dto';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { Public } from 'src/auth/jwt-public';
import { CreateServiceDto } from './dto/create-Service.dto';
import { Service } from './entities/Service.entity';

@Public()

@Controller('professionals')
export class ProfessionalsController {
  constructor(private readonly professionalsService: ProfessionalsService) {}

  @Post()
  create(@Body() createProfessionalDto: CreateProfessionalDto) {
    return this.professionalsService.create(createProfessionalDto);
  }

  @Post('/service/create')
  createService(@Body() createServicedto: CreateServiceDto) {
    return this.professionalsService.createService(createServicedto);
  }
  
  @Get()
  findAll() {
    return this.professionalsService.findAll();
  }

  @Get('service')
  findAllService() {
    return this.professionalsService.findAllService();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessionalDto: UpdateProfessionalDto) {
    return this.professionalsService.update(+id, updateProfessionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionalsService.remove(+id);
  }
}
