import { Injectable } from "@nestjs/common";
import { User } from "src/domain/user/entities/user.entity";
import { IUserRepository } from "src/domain/user/repositories/user.repository";
import { EntityManager } from "typeorm";
import { UserMapper } from "../mappers/user.mapper";
import { InjectEntityManager } from "@nestjs/typeorm";
import { UserOrmEntity } from "../entities/user.orm.entity";

@Injectable()
export class UserDbRepository implements IUserRepository {
  constructor(@InjectEntityManager() private readonly manager: EntityManager) {}

  async saveUser(user: User): Promise<void> {
    const ormUser = UserMapper.toOrmEntity(user);
    await this.manager.save(ormUser);
  }
  async deleteUser(id: string): Promise<void> {
    await this.manager.update(UserOrmEntity, { id }, { isActive: false });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const ormUser = await this.manager.findOne(UserOrmEntity, {
      where: { email },
    });
    if (!ormUser) return null;
    return UserMapper.toDomainEntity(ormUser);
  }

  async findUserById(id: string): Promise<User | null> {
    const ormUser = await this.manager.findOne(UserOrmEntity, {
      where: { id },
    });
    if (!ormUser) return null;
    return UserMapper.toDomainEntity(ormUser);
  }

  async findAllUsers(): Promise<User[] | []> {
    const ormUsers = await this.manager.find(UserOrmEntity);
    if (!ormUsers) return [];
    return ormUsers.map(UserMapper.toDomainEntity);
  }
}
