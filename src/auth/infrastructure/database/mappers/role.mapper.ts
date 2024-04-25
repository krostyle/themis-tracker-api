import { Role } from "@/auth/domain/entities/role.entity";
import { RoleOrmEntity } from "../entities/role.orm.entity";
import { Name } from "@/auth/domain/value-objects/name.value-object";
import { Description } from "@/auth/domain/value-objects/description.value-object";
import { PermissionMapper } from "./permission.mapper";

export class RoleMapper {
  static toOrmEntity(role: Role) {
    const ormRole = new RoleOrmEntity();
    ormRole.id = role.id;
    ormRole.name = role.name.value;
    ormRole.description = role.description.value;
    ormRole.isActive = role.isActive;
    ormRole.permissions = role.permissions.map(PermissionMapper.toOrmEntity);
    return ormRole;
  }
  static toDomainEntity(ormRole: RoleOrmEntity) {
    const role = new Role(
      ormRole.id,
      new Name(ormRole.name),
      new Description(ormRole.description),
      ormRole.isActive,
      ormRole.permissions.map(PermissionMapper.toDomainEntity)
    );
    return role;
  }
}
