import { Module } from '@nestjs/common'
import { ApiController } from './api.controller'
import { RegisterUserUseCase } from '@/auth/application/use-cases/register-user.use-case'
import { UserRepository } from '@/auth/infrastructure/database/repositories/user.repository.implementation'
import { PrismaModule } from '@/shared/prisma/prisma.module'
import { PasswordHasherService } from '@/auth/infrastructure/services/password-hasher.service'
import { UuidGeneratorService } from '@/auth/infrastructure/services/uuid-generator.service'
import { GetUserByIdUseCase } from '@/auth/application/use-cases/get-user-by-id.use-case'
import { GetUsersUseCase } from '@/auth/application/use-cases/get-users.use-case'

@Module({
  imports: [PrismaModule],
  providers: [
    RegisterUserUseCase,
    GetUserByIdUseCase,
    GetUsersUseCase,
    {
      provide: 'UserRepositoryInterface',
      useClass: UserRepository,
    },
    {
      provide: 'PasswordHasherServiceInterface',
      useClass: PasswordHasherService,
    },
    {
      provide: 'UuidGeneratorServiceInterface',
      useClass: UuidGeneratorService,
    },
  ],
  controllers: [ApiController],
})
export class ApiModule {}
