import { Professional } from 'src/professionals/entities/professional.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class News {
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @ManyToOne(() => Professional, (professionals) => professionals.post)
  professionals: Professional;
  
  @Column()
  serviceName: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  professionalId: string;

  @Column()
  price: number;

  @Column()
  date: Date;

}
