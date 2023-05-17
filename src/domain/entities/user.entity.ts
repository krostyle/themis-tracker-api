import { Role } from "./role.entity";

export class User {
  private _id: number;
  private _name: string;
  private _lastname: string;
  private _email: string;
  private _password: string;
  private _role: Role[];

  constructor(
    id: number,
    name: string,
    lastname: string,
    email: string,
    password: string,
    role: Role[]
  ) {
    this._id = id;
    this._name = name;
    this._lastname = lastname;
    this._password = password;
    this._role = role;
    if (!this.isValidEmail(email)) {
      throw new Error("Invalid email");
    }
    this._email = email;
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
    this._name = name;
  }

  public setLastname(lastname: string): void {
    this._lastname = lastname;
  }

  public setEmail(email: string): void {
    this._email = email;
  }

  public setPassword(password: string): void {
    this._password = password;
  }

  public setRole(role: Role[]): void {
    this._role = role;
  }

  private isValidEmail(email: string): boolean {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
}
