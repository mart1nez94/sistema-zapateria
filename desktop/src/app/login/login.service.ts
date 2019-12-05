import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBase: string = 'http://localhost/sistema-zapateria/api/index.php/api/login/';

  constructor(private _http: HttpClient) { }

  /**
   * Layout: Login
   * Module: Login
   * @param _usuario 
   * @param _contraseña 
   */
  getUsuarios(_usuario: string, _contraseña: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.apiBase + `usuarios/${_usuario}/${_contraseña}`, { 
      headers 
    });
  }

  getUsuario(_usuario: string, _contraseña: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.apiBase + `usuario/${_usuario}/${_contraseña}`, { 
      headers 
    });
  }
}
