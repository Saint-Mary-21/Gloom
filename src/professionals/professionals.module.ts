import { Module } from '@nestjs/common';
import { ProfessionalsService } from './professionals.service';
import { ProfessionalsController } from './professionals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professional } from './entities/professional.entity';
import { UsersModule } from 'src/users/users.module';
import { Service } from './entities/Service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Professional, Service]),UsersModule], 
  controllers: [ProfessionalsController],
  providers: [ProfessionalsService],
  exports: [ProfessionalsService]
})
export class ProfessionalsModule {}
