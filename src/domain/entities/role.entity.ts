import { Permission } from "./permission.entity";

export class Role {
  private _id: number;
  private _name: string;
  private _description: string;
  private _isActive: boolean;
  private _permissions: Permission[];
  constructor(
    id: number,
    name: string,
    description: string,
    isActive: boolean,
    permissions: Permission[]
  ) {
    if (!this.isNameValid(name)) {
      throw new Error("Invalid name");
    }
    if (!this.isDescriptionValid(description)) {
      throw new Error("Invalid description");
    }

    this._id = id;
    this._name = this.trimWord(name);
    this._description = this.trimWord(description);
    this._isActive = isActive;
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
    if (!this.isNameValid(name)) {
      throw new Error("Invalid name");
    }
    this._name = this.trimWord(name);
  }

  public setDescription(description: string): void {
    if (!this.isDescriptionValid(description)) {
      throw new Error("Invalid description");
    }
    this._description = this.trimWord(description);
  }

  public setPermissions(permissions: Permission[]): void {
    this._permissions = permissions;
  }

  public isActive(): boolean {
    return this._isActive;
  }

  public setIsActive(isActive: boolean): void {
    this._isActive = isActive;
  }

  private isNameValid(name: string): boolean {
    const trimmedName = name.trim();
    return trimmedName.length > 3 && trimmedName.length <= 50;
  }

  private isDescriptionValid(description: string): boolean {
    const trimmedDescription = description.trim();
    return trimmedDescription.length > 0 && trimmedDescription.length <= 100;
  }

  private trimWord(word: string): string {
    return word.trim();
  }
}
