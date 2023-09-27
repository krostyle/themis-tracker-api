import { Role } from "../entities/role.entity";

export interface IRoleRepository {
  saveRole(role: Role): Promise<void>;
  deleteRole(role: Role): Promise<void>;
  findRoleById(id: string): Promise<Role | null>;
  findAllRoles(): Promise<Role[] | []>;
  findRoleByName(name: string): Promise<Role | null>;
}
