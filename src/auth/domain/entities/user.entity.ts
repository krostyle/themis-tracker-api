import { ValidationError } from '../errors/validation.error'
import { Permission } from './permission.entity'
import { Role } from './role.entity'

export class User {
  private _id: string
  private _name: string
  private _lastname: string
  private _email: string
  private _password: string
  private _isActive: boolean
  private _roles: Role[] = []
  private _createdAt: Date
  private _updatedAt: Date

  constructor(
    id: string,
    name: string,
    lastname: string,
    email: string,
    password: string,
    isActive: boolean,
    roles?: Role[],
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this._id = id
    this._name = name
    this._lastname = lastname
    this._email = email
    this._password = password
    this._isActive = isActive
    this._roles = roles
    this._createdAt = createdAt
    this._updatedAt = updatedAt
  }

  get id(): string {
    return this._id
  }

  set id(id: string) {
    this._id = id
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get lastname(): string {
    return this._lastname
  }

  set lastname(lastname: string) {
    this._lastname = lastname
  }

  get email(): string {
    return this._email
  }

  set email(email: string) {
    this._email = email
  }

  get password(): string {
    return this._password
  }

  set password(password: string) {
    this._password = password
  }

  get isActive(): boolean {
    return this._isActive
  }

  get roles(): Role[] {
    return this._roles
  }

  set roles(roles: Role[]) {
    this._roles = roles
  }

  get createdAt(): Date {
    return this._createdAt
  }

  set createdAt(date: Date) {
    this._createdAt = date
  }

  get updatedAt(): Date {
    return this._updatedAt
  }

  set updatedAt(date: Date) {
    this._updatedAt = date
  }

  deactivate(): void {
    this._isActive = false
  }

  activate(): void {
    this._isActive = true
  }

  addRole(role: Role): void {
    this._roles.push(role)
  }

  removeRole(role: Role): void {
    const index = this._roles.indexOf(role)
    if (index > -1) {
      this._roles.splice(index, 1)
    }
  }

  changePassword(newPassword: string): void {
    if (newPassword === this._password) {
      throw new ValidationError(
        'New password must be different from the current password',
      )
    }
  }

  hasRole(role: Role): boolean {
    for (const r of this._roles) {
      if (r === role) {
        return true
      }
    }
    return false
  }

  hasPermission(permission: Permission): boolean {
    for (const role of this._roles) {
      if (role.hasPermission(permission)) {
        return true
      }
    }
    return false
  }
}
