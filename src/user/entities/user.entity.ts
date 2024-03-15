import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phoneNumber: number;

    @Column()
    Role: string;


}
