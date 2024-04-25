import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { RegisterUserUseCase } from "@/auth/application/use-cases/register-user.use-case";
import { UserDbRepository } from "@/auth/infrastructure/database/user/repositories/user.repository";

@Module({
  imports: [],
  providers: [
    RegisterUserUseCase,
    { provide: "UserRepository", useClass: UserDbRepository },
  ],
  controllers: [UserController],
})
export class UserModule {}
