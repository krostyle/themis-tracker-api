import { Permission } from './permission.entity'

export class Role {
  private _id: string
  private _name: string
  private _description: string
  private _isActive: boolean
  private _permissions: Permission[]
  private _createdAt: Date
  private _updatedAt: Date

  constructor(
    id: string,
    name: string,
    description: string,
    isActive: boolean,
    permissions: Permission[],
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this._id = id
    this._name = name
    this._description = description
    this._isActive = isActive
    this._permissions = permissions
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

  get description(): string {
    return this._description
  }

  set description(description: string) {
    this._description = description
  }

  get isActive(): boolean {
    return this._isActive
  }

  set isActive(isActive: boolean) {
    this._isActive = isActive
  }

  get permissions(): Permission[] {
    return [...this._permissions]
  }

  set permissions(permissions: Permission[]) {
    this._permissions = permissions
  }

  get createdAt(): Date {
    return this._createdAt
  }

  set createdAt(createdAt: Date) {
    this._createdAt = createdAt
  }

  get updatedAt(): Date {
    return this._updatedAt
  }

  set updatedAt(updatedAt: Date) {
    this._updatedAt = updatedAt
  }

  deactivate(): void {
    this._isActive = false
  }

  activate(): void {
    this._isActive = true
  }

  addPermission(permission: Permission): void {
    this._permissions.push(permission)
  }

  hasPermission(permission: Permission): boolean {
    for (const perm of this._permissions) {
      if (perm === permission) {
        return true
      }
    }
    return false
  }
}
