import { ValidationError } from "../errors/validation.error";

export class Name {
  private _value: string;

  constructor(value: string) {
    value = value.trim();
    if (!value || value.length < 3 || value.length > 60) {
      throw new ValidationError("Name must be between 3 and 60 characters.");
    }
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}
