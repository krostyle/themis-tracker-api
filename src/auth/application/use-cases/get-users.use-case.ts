import { UserRepositoryInterface } from '@/auth/domain/repositories/user.repository.interface'
import { Inject, Injectable } from '@nestjs/common'
import { GetUserDto } from '../dtos/get-user.dto'
import { User } from '@/auth/domain/entities/user.entity'

@Injectable()
export class GetUsersUseCase {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async execute(): Promise<GetUserDto[]> {
    const users = await this.userRepository.findAllUsers()

    return users.map((user: User) => ({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }))
  }
}
