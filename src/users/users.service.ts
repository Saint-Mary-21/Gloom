import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { updatePasswordRequest } from './dto/update-password.request.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRoleType } from './enums/user-role.enum';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const check = await this.findOne(createUserDto.email);
    if (check) {
      throw new BadRequestException('Email {} already exists');
    }
    const createUser = this.repo.create(createUserDto);
    return await this.repo.save(createUser)

  }


  findAll() {
    return `This action returns all users`;
  }

  findById(id: string) {
    return this.repo.findOneBy({ id });
  }
  findOne(email: string) {
    return this.repo.findOneBy({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
