import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { RegisterUserUseCase } from "@/auth/application/use-cases/register-user.use-case";

@Module({
  imports: [],
  providers: [RegisterUserUseCase],
  controllers: [UserController],
})
export class UserModule {}
