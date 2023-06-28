import { User } from "../entities/user.entity";

export interface UserRepository {
  save(user: User): Promise<void>;
  delete(user: User): Promise<void>;
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
  findAllUsers(): Promise<User[] | []>;
}
