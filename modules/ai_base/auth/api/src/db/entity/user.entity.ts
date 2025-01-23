import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("users")
export abstract class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  bio: string;
  @Column()
  image: string;
  @CreateDateColumn()
  stamp: Date;
  @UpdateDateColumn()
  change: Date;

}
