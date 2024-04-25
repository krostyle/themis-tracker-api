import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { PermissionOrmEntity } from "./permission.orm.entity";
import { UserOrmEntity } from "./user.orm.entity";

@Entity({ name: "role" })
export class RoleOrmEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ name: "name" })
  name: string;
  @Column({ name: "description" })
  description: string;
  @Column({ name: "is_active" })
  isActive: boolean;

  @ManyToMany(() => PermissionOrmEntity)
  @JoinTable()
  permissions: PermissionOrmEntity[];
}
