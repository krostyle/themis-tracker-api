import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "permission" })
export class PermissionOrmEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name", type: "varchar" })
  name: string;

  @Column({ name: "description", type: "varchar" })
  description: string;

  @Column({ name: "is_active", type: "boolean", default: true })
  isActive: boolean;
}
