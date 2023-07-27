import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { PermissionOrmEntity } from "../user/entities/permission.orm.entity";
import { PermissionEnum } from "@/domain/user/enum/permission.enum";

export default class PermissionSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const permissionRepository = dataSource.getRepository(PermissionOrmEntity);

    const permissionsData = [
      {
        name: PermissionEnum.CREATE_USER,
        description: "Create user permission",
      },
      {
        name: PermissionEnum.READ_USER,
        description: "Read user permission",
      },
      {
        name: PermissionEnum.UPDATE_USER,
        description: "Update user permission",
      },
      {
        name: PermissionEnum.DELETE_USER,
        description: "Delete user permission",
      },
      {
        name: PermissionEnum.CREATE_ROLE,
        description: "Create role permission",
      },
      {
        name: PermissionEnum.READ_ROLE,
        description: "Read role permission",
      },
      {
        name: PermissionEnum.UPDATE_ROLE,
        description: "Update role permission",
      },
      {
        name: PermissionEnum.DELETE_ROLE,
        description: "Delete role permission",
      },
    ];

    const permissions = await permissionRepository.find({
      where: permissionsData.map((permission) => ({
        name: permission.name,
      })),
    });

    if (permissions.length === 0) {
      await permissionRepository.insert(permissionsData);
    }
  }
}
