import { User } from "../entities/user.entity";

export interface UserRepository {
  saveUser(user: User): Promise<void>;
  deleteUser(id: string): Promise<void>;
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
  findAllUsers(): Promise<User[] | []>;
}
