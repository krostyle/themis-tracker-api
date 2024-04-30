import { ApiProperty } from '@nestjs/swagger'

export class RegisterUserResponseDto {
  @ApiProperty()
  name: string
  @ApiProperty()
  lastname: string
  @ApiProperty()
  email: string
  @ApiProperty()
  isActive: boolean
  @ApiProperty()
  createdAt: Date
  @ApiProperty()
  updatedAt: Date
}
