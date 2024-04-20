import { Injectable } from '@nestjs/common';
import { CreateProfessionalDto } from './dto/create-professional.dto';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Professional } from './entities/professional.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { CreateServiceDto } from './dto/create-Service.dto';
import { Service } from './entities/Service.entity';


@Injectable()
export class ProfessionalsService {

  constructor(
    @InjectRepository(Service) private repoService: Repository<Service>,
    @InjectRepository(Professional) private repo: Repository<Professional>,
    private userService: UsersService,
  ) {}

  async create(createProfessionalDto: CreateProfessionalDto) {
    
    const createProfessional = this.repo.create(createProfessionalDto);
    const users = await this.userService.create(createProfessionalDto.userid)
    createProfessional.user= users;
    return await this.repo.save(createProfessional)

  }

  async createService(createServiceDto: CreateServiceDto) {
    const ServiceEntity = this.repoService.create(createServiceDto);
    return await this.repoService.save(ServiceEntity);
 }

  findAll() {
    return `This action returns all professionals`;
  }

  findAllService() {
    return this.repoService.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} professional`;
  }

  update(id: number, updateProfessionalDto: UpdateProfessionalDto) {
    return `This action updates a #${id} professional`;
  }

  remove(id: number) {
    return `This action removes a #${id} professional`;
  }
}
