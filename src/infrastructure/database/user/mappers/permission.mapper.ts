import { Permission } from "src/domain/user/entities/permission.entity";
import { PermissionOrmEntity } from "../entities/permission.orm.entity";
import { Name } from "src/domain/user/value-objects/name.value-object";
import { Description } from "../../../../domain/user/value-objects/description.value-object";

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
