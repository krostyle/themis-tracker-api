import { Description } from "../value-objects/description.value-object";
import { Name } from "../value-objects/name.value-object";
import { Permission } from "./permission.entity";

export class Role {
  private _id: string;
  private _name: Name;
  private _description: Description;
  private _isActive: boolean;
  private _permissions: Permission[];

  constructor(
    id: string,
    name: Name,
    description: Description,
    isActive: boolean,
    permissions: Permission[]
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._isActive = isActive;
    this._permissions = permissions;
  }

  get id(): string {
    return this._id;
  }

  get name(): Name {
    return this._name;
  }

  get description(): Description {
    return this._description;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  get permissions(): Permission[] {
    return this._permissions;
  }

  deactivate(): void {
    this._isActive = false;
  }

  activate(): void {
    this._isActive = true;
  }

  addPermission(permission: Permission): void {
    this._permissions.push(permission);
  }

  hasPermission(permission: Permission): boolean {
    for (const perm of this._permissions) {
      if (perm === permission) {
        return true;
      }
    }
    return false;
  }
}
