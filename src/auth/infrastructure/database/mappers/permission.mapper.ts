import { Permission } from "@/auth/domain/entities/permission.entity";
import { PermissionOrmEntity } from "../entities/permission.orm.entity";
import { Name } from "@/auth/domain/value-objects/name.value-object";
import { Description } from "../../../domain/value-objects/description.value-object";

export class PermissionMapper {
  static toOrmEntity(permission: Permission): PermissionOrmEntity {
    const ormPermission = new PermissionOrmEntity();
    ormPermission.id = permission.id;
    ormPermission.name = permission.name.value;
    ormPermission.description = permission.description.value;
    ormPermission.isActive = permission.isActive;
    return ormPermission;
  }

  static toDomainEntity(ormPermission: PermissionOrmEntity): Permission {
    const permission = new Permission(
      ormPermission.id,
      new Name(ormPermission.name),
      new Description(ormPermission.description),
      ormPermission.isActive
    );
    return permission;
  }
}
