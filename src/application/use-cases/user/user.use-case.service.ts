import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/domain/user/entities/user.entity";
import { UserRepository } from "src/domain/user/repositories/user.repository";
import { Name } from "../../../domain/user/value-objects/name.value-object";
import { Email } from "src/domain/user/value-objects/email.value-object";
import { Password } from "src/domain/user/value-objects/password.value-object";

@Injectable()
export class UserUseCase {
  constructor(
    @Inject("UserRepository") private readonly userRepository: UserRepository
  ) {}

  public async registerUser(userData: any): Promise<void> {
    const user = await this.userRepository.findUserByEmail(userData.email);
    if (user) {
      throw new Error("User already exists");
    }
    const userEntity = new User(
      userData.id,
      new Name(userData.name),
      new Name(userData.lastname),
      new Email(userData.email),
      new Password(userData.password),
      userData.isActive,
      userData.roles
    );

    await this.userRepository.saveUser(userEntity);
  }

  public async getUsers(): Promise<User[] | []> {
    const users = await this.userRepository.findAllUsers();
    return users;
  }
}
