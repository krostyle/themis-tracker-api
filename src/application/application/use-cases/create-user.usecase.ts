import { UserRepository } from "src/domain/user/repositories/user.repository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
}
