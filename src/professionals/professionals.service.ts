import { Injectable } from '@nestjs/common';
import { CreateProfessionalDto } from './dto/create-professional.dto';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Professional } from './entities/professional.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfessionalsService {

  constructor(
    @InjectRepository(Professional) private repo: Repository<Professional>,
    private userService: UsersService,
  ) {}

  async create(createProfessionalDto: CreateProfessionalDto) {
    
    const createProfessional = this.repo.create(createProfessionalDto);
    const users = await this.userService.create(createProfessionalDto.userid)
    createProfessional.user= users;
    return await this.repo.save(createProfessional)

  }

  findAll() {
    return `This action returns all professionals`;
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
