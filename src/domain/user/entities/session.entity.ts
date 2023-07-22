import { Permission } from "./permission.entity";
import { Role } from "./role.entity";
import { User } from "./user.entity";

class Session {
  private _token: string;
  private _user: User;
  private _authenticated: boolean;
  private _roles: Role[];

  constructor(token: string, user: User, roles: Role[]) {
    this._token = token;
    this._user = user;
    this._roles = roles;
    this._authenticated = true;
  }

  public isAuthenticated(): boolean {
    return this._authenticated;
  }

  public getUser(): User {
    return this._user;
  }

  public getRoles(): Role[] {
    return this._roles;
  }

  public hasPermission(permission: Permission): boolean {
    return this._user.hasPermission(permission);
  }

  public getToken(): string {
    return this._token;
  }

  public logout() {
    this._authenticated = false;
    // Aquí puedes realizar cualquier otra acción necesaria al cerrar la sesión, como invalidar el token en el cliente.
  }
}
