import { User } from "src/domain/user/entities/user.entity";
import { UserOrmEntity } from "../entities/user.orm.entity";
import { RoleMapper } from "./role.mapper";
import { Name } from "../../../../domain/user/value-objects/name.value-object";
import { Email } from "../../../../domain/user/value-objects/email.value-object";
import { Password } from "../../../../domain/user/value-objects/password.value-object";

export class UserMapper {
  static toOrmEntity(user: User): UserOrmEntity {
    const ormUser = new UserOrmEntity();
    if (user.id) {
      ormUser.id = user.id;
    }
    ormUser.name = user.name.value;
    ormUser.lastname = user.lastname.value;
    ormUser.email = user.email.value;
    ormUser.password = user.password.value;
    ormUser.isActive = user.isActive;
    if (user.roles) {
      ormUser.roles = user.roles.map(RoleMapper.toOrmEntity);
    } else {
      ormUser.roles = [];
    }
    return ormUser;
  }
  static toDomainEntity(ormUser: UserOrmEntity): User {
    const roles = ormUser.roles
      ? ormUser.roles.map(RoleMapper.toDomainEntity)
      : [];
    const user = new User(
      ormUser.id,
      new Name(ormUser.name),
      new Name(ormUser.lastname),
      new Email(ormUser.email),
      new Password(ormUser.password),
      ormUser.isActive,
      roles
    );
    return user;
  }
}
