import { Permission } from "../entities/permission.entity";

export interface IPermissionRepository {
  savePermission(permission: Permission): Promise<void>;
  deletePermission(permission: Permission): Promise<void>;
  findPermissionById(id: string): Promise<Permission | null>;
  findAllPermissions(): Promise<Permission[] | []>;
  findPermissionByName(name: string): Promise<Permission | null>;
}
