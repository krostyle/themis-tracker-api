export class Permission {
  private _id: number;
  private _name: string;
  private _description: string;
  private _isActive: boolean;
  constructor(
    id: number,
    name: string,
    description: string,
    isActive: boolean
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
  }

  private isNameValid(name: string): boolean {
    const trimmedName = name.trim();
    return trimmedName.length >= 3 && trimmedName.length <= 50;
  }

  private isDescriptionValid(description: string): boolean {
    const trimmedDescription = description.trim();
    return trimmedDescription.length >= 3 && trimmedDescription.length <= 100;
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

  public getIsActive(): boolean {
    return this._isActive;
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

  private trimWord(word: string): string {
    return word.trim();
  }

  public setIsActive(isActive: boolean): void {
    this._isActive = isActive;
  }
}
