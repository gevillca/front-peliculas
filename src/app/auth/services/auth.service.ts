import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environments } from '../../../environments/environments';
import {
  User,
  AuthStatus,
  LoginResponse,
  CheckTokenResponse,
  RegisterUser,
  RegisterResponse,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public apiLocal: string = environments.apiLocal;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.cheacking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() {
    this.checkAuthStatus().subscribe();
  }

  login(user: string, password: string) {
    const url = `${this.apiLocal}/usuario/login`;
    const body = { usuario: user, contrasena: password };
    return this.http.post<LoginResponse>(url, body).pipe(
      map(({ usuario, token }) => this.setAuthentication(usuario, token)),
      catchError((err) => throwError(() => err.error.message))
    );
  }

  register({
    contrasena,
    nombres,
    primer_apellido,
    usuario,
    segundo_apellido,
  }: RegisterUser): Observable<boolean> {
    const url = `${this.apiLocal}/usuario/register`;
    const body = {
      contrasena,
      nombres,
      primer_apellido,
      usuario,
      segundo_apellido,
    };
    return this.http.post<RegisterResponse>(url, body).pipe(
      // tap((resp) => {
      //   console.log(resp);
      // }),
      map(({ usuario, token }) => {
        if (!usuario && !token) return false;
        return true;
      }),
      catchError((err) => throwError(() => err.error.message))
    );
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.apiLocal}/usuario/check-token`;
    const token = localStorage.getItem('token');

    if (!token) {
      this.logout();

      return of(false);
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<CheckTokenResponse>(url, { headers }).pipe(
      // tap((data) => {
      //   console.log('data tap:', data);
      // }),
      map(({ usuario, token }) => this.setAuthentication(usuario, token)),
      catchError(() => {
        this._authStatus.set(AuthStatus.notAuthenticated);
        return of(false);
      })
    );
  }

  private setAuthentication(usuario: User, token: string): boolean {
    this._currentUser.set(usuario);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);
    return true;
  }
  logout() {
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }
}
