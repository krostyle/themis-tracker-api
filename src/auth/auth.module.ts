import { Module } from '@nestjs/common'
import { ApiModule } from './api/user/api.module'

@Module({
  imports: [ApiModule],
})
export class AuthModule {}
