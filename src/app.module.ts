import { Module } from "@nestjs/common";
import { ApiModule } from "./infrastructure/api.module";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./infrastructure/database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ApiModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
