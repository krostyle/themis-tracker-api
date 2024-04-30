import { ApiProperty } from '@nestjs/swagger'

export class GetUserDto {
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
