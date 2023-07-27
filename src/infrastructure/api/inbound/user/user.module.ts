import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserUseCase } from "src/application/use-cases/user/user.use-case.service";
import { UserDbRepository } from "src/infrastructure/database/user/repositories/user.repository";

@Module({
  imports: [],
  providers: [
    UserUseCase,
    { provide: "UserRepository", useClass: UserDbRepository },
  ],
  controllers: [UserController],
})
export class UserModule {}
