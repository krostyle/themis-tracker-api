import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { RegisterUserUseCase } from "@/application/use-cases/user/register-user.use-case.service";
import { UserDbRepository } from "src/infrastructure/database/user/repositories/user.repository";

@Module({
  imports: [],
  providers: [
    RegisterUserUseCase,
    { provide: "UserRepository", useClass: UserDbRepository },
  ],
  controllers: [UserController],
})
export class UserModule {}
