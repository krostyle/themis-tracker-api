import { DataSource } from "typeorm";
import { Seeder, runSeeders } from "typeorm-extension";
import PermissionSeeder from "./permission.seeder";

export default class InitSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [PermissionSeeder],
      // factories: [],
    });
  }
}
