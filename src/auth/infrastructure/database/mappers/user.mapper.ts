import { Role } from '@/auth/domain/entities/role.entity'
import { User } from '@/auth/domain/entities/user.entity'
import { User as PrismaUser, Prisma } from '@prisma/client'

export class UserMapper {
  static toPersistence(user: User): Prisma.UserCreateInput {
    return {
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }
  }

  static toDomain(user: PrismaUser): User {
    return new User(
      user.id,
      user.name,
      user.lastname,
      user.email,
      user.password,
      user.isActive,
      [],
      user.createdAt,
      user.updatedAt,
    )
  }
}
