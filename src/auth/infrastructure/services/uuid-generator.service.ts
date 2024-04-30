import { UuidGeneratorServiceInterface } from '@/auth/domain/services/uuid-generator.interface'
import { v4 } from 'uuid'

export class UuidGeneratorService implements UuidGeneratorServiceInterface {
  generateUuid(): string {
    return v4()
  }
}
