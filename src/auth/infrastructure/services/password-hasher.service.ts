import { PasswordHasherServiceInterface } from '@/auth/domain/services/password-hasher.interface'
import * as bcrypt from 'bcrypt'

export class PasswordHasherService implements PasswordHasherServiceInterface {
  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }
  comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}
