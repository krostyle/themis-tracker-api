import { User } from '@/auth/domain/entities/user.entity'
import { UserRepositoryInterface } from '@/auth/domain/repositories/user.repository.interface'
import { PrismaService } from '@/shared/prisma/prisma.service'
import { UserMapper } from '../mappers/user.mapper'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async createUser(user: User): Promise<User> {
    const userData = UserMapper.toPersistence(user)

    const userCreated = await this.prisma.user.create({
      data: userData,
    })

    return UserMapper.toDomain(userCreated)
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      return null
    }

    return UserMapper.toDomain(user)
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!user) {
      return null
    }

    return UserMapper.toDomain(user)
  }

  async findAllUsers(): Promise<User[] | []> {
    const users = await this.prisma.user.findMany()

    return users.map((user) => UserMapper.toDomain(user))
  }
}
