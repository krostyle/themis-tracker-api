import { Inject, Injectable } from "@nestjs/common";
import { User } from "@/auth/domain/entities/user.entity";
import { UserRepositoryInterface } from "@/auth/domain/repositories/user.repository.interface";
import { Name } from "../../domain/value-objects/name.value-object";
import { Email } from "@/auth/domain/value-objects/email.value-object";
import { Password } from "@/auth/domain/value-objects/password.value-object";
import { RegisterUserDto } from "./dtos/register-user.dto";

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @Inject("UserRepository")
    private readonly userRepository: UserRepositoryInterface
  ) {}

  public async registerUser(userData: RegisterUserDto): Promise<void> {
    const user = await this.userRepository.findUserByEmail(userData.email);
    if (user) {
      throw new Error("User already exists");
    }

    const userEntity = new User(
      new Name(userData.name),
      new Name(userData.lastname),
      new Email(userData.email),
      new Password(userData.password),
      true,
      []
    );

    await this.userRepository.saveUser(userEntity);
  }

  public async getUsers(): Promise<User[] | []> {
    const users = await this.userRepository.findAllUsers();
    return users;
  }
}
