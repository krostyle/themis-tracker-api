import { Permission } from "../entities/permission.entity";

export interface PermissionRepository {
  save(permission: Permission): Promise<void>;
  delete(permission: Permission): Promise<void>;
  findPermissionById(id: string): Promise<Permission | null>;
  findAllPermissions(): Promise<Permission[] | []>;
  findPermissionByName(name: string): Promise<Permission | null>;
}
