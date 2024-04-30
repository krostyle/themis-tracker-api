import { Inject, Injectable } from '@nestjs/common'
import { GetUserDto } from '../dtos/get-user.dto'
import { DomainError } from '@/auth/domain/errors/domain.error'
import { UserRepositoryInterface } from '@/auth/domain/repositories/user.repository.interface'

@Injectable()
export class GetUserByIdUseCase {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async execute(userId: string): Promise<GetUserDto> {
    const user = await this.userRepository.findUserById(userId)
    if (!user) {
      throw new DomainError('User not found')
    }

    return {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }
  }
}
