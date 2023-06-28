import { Role } from "../entities/role.entity";

export interface RoleRepository {
  save(role: Role): Promise<void>;
  delete(role: Role): Promise<void>;
  findRoleById(id: string): Promise<Role | null>;
  findAllRoles(): Promise<Role[] | []>;
  findRoleByName(name: string): Promise<Role | null>;
}
