import { ValidationError } from "../errors/validation.error";

export class Email {
  private _value: string;

  constructor(value: string) {
    value = value.trim();
    const regex = /^\S+@\S+\.\S+$/;
    if (!value || !regex.test(value)) {
      throw new ValidationError("Email must be valid.");
    }
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}
