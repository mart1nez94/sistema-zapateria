import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiBase: string = 'http://localhost/sistema-permisos/api/index.php/api/admin/';
  datosUsuario = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private _http: HttpClient) { }

  /**
   * Layout: Permisos
   * Module: Admin 
   */
  getPermisos(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.apiBase + `permisos`, { 
      headers 
    });
  }

  /**
   * Layout: Permisos
   * Module: Admin
   * @param nombrePermiso 
   */
  postPermisos(nombrePermiso: string) {
    const parametrosPost = new HttpParams()
      .set('nombre', nombrePermiso)
      .set('administrador', '1');
    return this._http.post(this.apiBase + `permisos`, parametrosPost.toString(), {
      headers: new HttpHeaders() .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  /**
   * Layout: Grupos
   * Module: Admin
   */
  getGrupos() {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.apiBase + `grupos`, { 
      headers 
    });
  }

  /**
   * Layout: Grupos
   * Module: Admin
   * @param nombreGrupo 
   */
  postGrupos(nombreGrupo: string) {
    const parametrosPost = new HttpParams()
      .set('nombre', nombreGrupo)
      .set('administrador', '1');
    return this._http.post(this.apiBase + `grupos`, parametrosPost.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  /**
   * Layout: Grupos
   * Module: Admin
   * @param grupo 
   */
  getAsignados(grupo: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.apiBase + `asignados/${grupo}`, { headers });
  }

  /**
   * Layout: Grupos
   * Module: Admin
   * @param grupo
   * @param permiso 
   * @param estado 
   */
  putAsignados(grupo: number, permiso: number, estado: number) {
    const parametrosPut = new HttpParams()
      .set('grupo', grupo.toString())
      .set('permiso', permiso.toString())
      .set('estado', estado.toString());
    return this._http.put(this.apiBase + `asignados`, parametrosPut.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  postUsuarios(usuario: string, contrasena: string, grupo: number) {
    const parametrosPost = new HttpParams()
      .set('usuario', usuario)
      .set('contraseña', contrasena)
      .set('grupo', grupo.toString());
    return this._http.post(this.apiBase + `usuarios`, parametrosPost.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
}
