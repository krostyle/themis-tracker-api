import { ValidationError } from "../errors/validation.error";
import { Email } from "../value-objects/email.value-object";
import { Name } from "../value-objects/name.value-object";
import { Password } from "../value-objects/password.value-object";
import { Permission } from "./permission.entity";
import { Role } from "./role.entity";

export class User {
  private _id: string;
  private _name: Name;
  private _lastname: Name;
  private _email: Email;
  private _password: Password;
  private _isActive: boolean;
  private _roles: Role[];

  constructor(
    id: string,
    name: Name,
    lastname: Name,
    email: Email,
    password: Password,
    isActive: boolean,
    roles: Role[]
  ) {
    this._id = id;
    this._name = name;
    this._lastname = lastname;
    this._email = email;
    this._password = password;
    this._isActive = isActive;
    this._roles = roles;
  }

  get id(): string {
    return this._id;
  }

  get name(): Name {
    return this._name;
  }

  get lastname(): Name {
    return this._lastname;
  }

  get email(): Email {
    return this._email;
  }

  get password(): Password {
    return this._password;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  get roles(): Role[] {
    return this._roles;
  }

  deactivate(): void {
    this._isActive = false;
  }

  activate(): void {
    this._isActive = true;
  }

  addRole(role: Role): void {
    this._roles.push(role);
  }

  changePassword(newPassword: Password): void {
    if (newPassword.value === this._password.value) {
      throw new ValidationError(
        "New password must be different from current password."
      );
    }
    this._password = newPassword;
  }
  hasPermission(permission: Permission): boolean {
    for (const role of this._roles) {
      if (role.hasPermission(permission)) {
        return true;
      }
    }
    return false;
  }
}
