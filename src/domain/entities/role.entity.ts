import { Permission } from "./permission.entity";

export class Role {
  private _id: number;
  private _name: string;
  private _description: string;
  private _permissions: Permission[];
  constructor(
    id: number,
    name: string,
    description: string,
    permissions: Permission[]
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._permissions = permissions;
  }

  public getId(): number {
    return this._id;
  }

  public getName(): string {
    return this._name;
  }

  public getDescription(): string {
    return this._description;
  }

  public getPermissions(): Permission[] {
    return this._permissions;
  }

  public setName(name: string): void {
    this._name = name;
  }

  public setDescription(description: string): void {
    this._description = description;
  }

  public setPermissions(permissions: Permission[]): void {
    this._permissions = permissions;
  }
}
