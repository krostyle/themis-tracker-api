import { Description } from "../value-objects/description.value-object";
import { Name } from "../value-objects/name.value-object";

export class Permission {
  private _id: string;
  private _name: Name;
  private _description: Description;
  private _isActive: boolean;

  constructor(
    id: string,
    name: Name,
    description: Description,
    isActive: boolean
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._isActive = isActive;
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

  deactivate(): void {
    this._isActive = false;
  }

  activate(): void {
    this._isActive = true;
  }
}
