import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common'
import { RegisterUserUseCase } from '../../application/use-cases/register-user.use-case'
import { RegisterUserDto } from '@/auth/application/dtos/register-user.dto'
import { RegisterUserResponseDto } from '@/auth/application/dtos/register-user-response.dto'
import { GetUserDto } from '@/auth/application/dtos/get-user.dto'
import { GetUserByIdUseCase } from '@/auth/application/use-cases/get-user-by-id.use-case'
import { GetUsersUseCase } from '@/auth/application/use-cases/get-users.use-case'

@Controller('user')
export class ApiController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly getUsersUseCase: GetUsersUseCase,
  ) {}

  @Post()
  async registerUser(
    @Body() userData: RegisterUserDto,
  ): Promise<RegisterUserResponseDto> {
    try {
      return await this.registerUserUseCase.execute(userData)
    } catch (error) {
      throw new HttpException(error.message, 400)
    }
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<GetUserDto> {
    try {
      return await this.getUserByIdUseCase.execute(id)
    } catch (error) {
      throw new HttpException(error.message, 400)
    }
  }

  @Get()
  async getUsers(): Promise<GetUserDto[]> {
    try {
      return await this.getUsersUseCase.execute()
    } catch (error) {
      throw new HttpException(error.message, 400)
    }
  }
}
