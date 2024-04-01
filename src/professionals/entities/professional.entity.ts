import { News } from "src/news/entities/news.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Professional {
@PrimaryGeneratedColumn("uuid")
id: string;

@Column()
professionallicense: string;

@Column()
tinnumber: number;

@OneToOne(() => User, (user) => user.profile, { eager: true })
  user: User;
  @OneToMany(() => News, (post) => post.professionals, {
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  post: News[];

@Column()
skill: string;




}
