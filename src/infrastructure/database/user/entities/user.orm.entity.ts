import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { RoleOrmEntity } from "./role.orm.entity";

@Entity({ name: "user" })
export class UserOrmEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name", type: "varchar" })
  name: string;

  @Column({ name: "lastname", type: "varchar" })
  lastname: string;

  @Column({ name: "email", type: "varchar" })
  email: string;

  @Column({ name: "password", type: "varchar" })
  password: string;

  @Column({ name: "is_active", type: "boolean" })
  isActive: boolean;

  @ManyToMany(() => RoleOrmEntity)
  @JoinTable()
  roles: RoleOrmEntity[];
}
