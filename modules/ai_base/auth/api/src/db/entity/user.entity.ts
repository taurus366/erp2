import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity("users")
export class User {
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
  @Column()
  lang_id: number;


  async setPassword(value: string) {
    this.password = await bcrypt.hash(value, 10);
  }
}
