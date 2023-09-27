import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import InitSeeder from "../seeders/init.seeder";

config();
console.log(process.env.POSTGRES_PASSWORD);

export const getTypeOrmConfig = (
  configService: ConfigService
): DataSourceOptions & SeederOptions => ({
  type: "postgres",
  host: configService.get("POSTGRES_HOST"),
  port: configService.get("POSTGRES_PORT"),
  username: configService.get("POSTGRES_USER"),
  password: configService.get<string>("POSTGRES_PASSWORD"),
  database: configService.get("POSTGRES_DB"),
  entities: [__dirname + "/../**/*.orm.entity{.ts,.js}"],
  synchronize: false, //configService.get("NODE_ENV") === "development" ? true : false,
  logging: configService.get("NODE_ENV") === "development" ? true : false,
  migrations: [__dirname + "/../migrations/*{.ts,.js}"],
  seeds: [InitSeeder],
});

export default new DataSource(getTypeOrmConfig(new ConfigService()));
