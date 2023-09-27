import { ValidationError } from "../../errors/validation.error";

export class Password {
  private _value: string;

  constructor(value: string) {
    if (!this.isValidPassword(value)) {
      throw new ValidationError(
        "Password must contain at least one digit, one lowercase letter, one uppercase letter and one special character."
      );
    }
    this._value = value.trim();
  }

  private isValidPassword(password: string): boolean {
    const hasNumber = /\d/.test(password);

    const hasLowercase = /[a-z]/.test(password);

    const hasUppercase = /[A-Z]/.test(password);

    const hasSpecialCharacter = /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/.test(
      password
    );
    return hasNumber && hasLowercase && hasUppercase && hasSpecialCharacter;
  }

  isEquals(password: Password): boolean {
    return this._value === password.value;
  }

  get value(): string {
    return this._value;
  }
}
