import { Inject, Injectable } from '@nestjs/common'
import { User } from '@/auth/domain/entities/user.entity'
import { UserRepositoryInterface } from '@/auth/domain/repositories/user.repository.interface'
import { RegisterUserDto } from '../dtos/register-user.dto'
import { DomainError } from '@/auth/domain/errors/domain.error'
import { PasswordHasherServiceInterface } from '@/auth/domain/services/password-hasher.interface'
import { UuidGeneratorServiceInterface } from '@/auth/domain/services/uuid-generator.interface'
import { RegisterUserResponseDto } from '../dtos/register-user-response.dto'

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
    @Inject('PasswordHasherServiceInterface')
    private readonly passwordHasherService: PasswordHasherServiceInterface,
    @Inject('UuidGeneratorServiceInterface')
    private readonly uuidGeneratorService: UuidGeneratorServiceInterface,
  ) {}

  public async execute(
    userData: RegisterUserDto,
  ): Promise<RegisterUserResponseDto> {
    const user = await this.userRepository.findUserByEmail(userData.email)
    if (user) {
      throw new DomainError('User already exists')
    }

    const hashedPassword = await this.passwordHasherService.hashPassword(
      userData.password,
    )

    const newUser = new User(
      this.uuidGeneratorService.generateUuid(),
      userData.name,
      userData.lastname,
      userData.email,
      hashedPassword,
      true,
    )

    const userCreated = await this.userRepository.createUser(newUser)

    return {
      name: userCreated.name,
      lastname: userCreated.lastname,
      email: userCreated.email,
      isActive: userCreated.isActive,
      createdAt: userCreated.createdAt,
      updatedAt: userCreated.updatedAt,
    }
  }
}
