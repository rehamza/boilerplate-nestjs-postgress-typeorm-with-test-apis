import { Entity, PrimaryGeneratedColumn, Column , CreateDateColumn , UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column()
    dateOfBirth: string;

    @Column()
    nationality: string;

    @Column()
    country: string;

    @Column({ type: 'varchar', length: 15 })
    phoneNumber: string;

    @Column()
    password: string;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({ type: 'boolean', default: false })
    isVerified: boolean;

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @UpdateDateColumn({type: "timestamp"})
    updatedAt: Date;

}