import { Role } from "./role.entity";

export class User {
  private _id: number;
  private _name: string;
  private _lastname: string;
  private _email: string;
  private _password: string;
  private _isActive: boolean;
  private _role: Role[];

  constructor(
    id: number,
    name: string,
    lastname: string,
    email: string,
    password: string,
    isActive: boolean,
    role: Role[]
  ) {
    if (!this.isValidEmail(email)) {
      throw new Error("Invalid email");
    }
    if (!this.isNameValid(name)) {
      throw new Error("Invalid name");
    }
    if (!this.isNameValid(lastname)) {
      throw new Error("Invalid lastname");
    }

    this._id = id;
    this._name = this.trimWord(name);
    this._lastname = this.trimWord(lastname);
    this._email = email;
    this._password = password;
    this._isActive = isActive;
    this._role = role;
  }

  public getId(): number {
    return this._id;
  }

  public getName(): string {
    return this._name;
  }

  public getLastname(): string {
    return this._lastname;
  }

  public getEmail(): string {
    return this._email;
  }

  public getPassword(): string {
    return this._password;
  }

  public getRole(): Role[] {
    return this._role;
  }

  public setName(name: string): void {
    if (!this.isNameValid(name)) {
      throw new Error("Invalid name");
    }
    this._name = this.trimWord(name);
  }

  public setLastname(lastname: string): void {
    if (!this.isNameValid(lastname)) {
      throw new Error("Invalid lastname");
    }
    this._lastname = this.trimWord(lastname);
  }

  public setEmail(email: string): void {
    if (!this.isValidEmail(email)) {
      throw new Error("Invalid email");
    }
    this._email = email;
  }

  public setPassword(password: string): void {
    this._password = password;
  }

  public setRole(role: Role[]): void {
    this._role = role;
  }

  private isNameValid(name: string): boolean {
    return name.length > 0 && name.length <= 50;
  }

  private isValidEmail(email: string): boolean {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  private trimWord(word: string): string {
    return word.trim();
  }
}
