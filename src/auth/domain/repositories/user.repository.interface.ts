import { User } from '../entities/user.entity'

export interface UserRepositoryInterface {
  createUser(user: User): Promise<User>
  // deleteUser(id: string): Promise<void>;
  findUserByEmail(email: string): Promise<User>
  findUserById(id: string): Promise<User>
  findAllUsers(): Promise<User[] | []>
}
