import { UserRepository } from "src/domain/users/repositories/user.repository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
}
