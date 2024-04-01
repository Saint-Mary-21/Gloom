import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRoleType } from '../enums/user-role.enum';
import { Professional } from 'src/professionals/entities/professional.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phonenumber: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: UserRoleType;

  @OneToOne(() => Professional, (profile) => profile.user)
  @JoinColumn()
  profile: Professional;

}
