import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserResponseDto {
  @ApiProperty()
  message: string;
}
