import { Module } from "@nestjs/common";
import { UserModule } from "./api/inbound/user/user.module";

@Module({
  imports: [UserModule],
  providers: [],
  controllers: [],
})
export class ApiModule {}
