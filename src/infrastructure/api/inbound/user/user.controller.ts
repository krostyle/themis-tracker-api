import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserUseCase } from "../../../../application/use-cases/user/user.use-case.service";
import { User } from "src/domain/user/entities/user.entity";

@Controller("user")
export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}
  @Get()
  async getUsers(): Promise<User[] | []> {
    const users = await this.userUseCase.getUsers();
    return users;
  }

  @Post()
  async registerUser(@Body() userData: any): Promise<void> {
    const user = await this.userUseCase.registerUser(userData);
    return user;
  }
}
