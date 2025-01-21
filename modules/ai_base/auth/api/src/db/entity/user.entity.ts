import { Column, Entity} from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity()
export abstract class User extends BaseEntity {
  @Column({unique: true})
  email: string;
  @Column({unique: true})
  username: string;
  @Column()
  password: string;
  @Column()
  bio: string;
  @Column()
  image: string;

}
