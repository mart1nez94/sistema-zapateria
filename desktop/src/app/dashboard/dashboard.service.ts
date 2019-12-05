import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiBase: string = 'http://localhost/sistema-zapateria/api/index.php/api/admin/';
  datosUsuario = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private _http: HttpClient) { }

  getArticulos(codigo: number): Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(`http://localhost/sistema-zapateria/api/index.php/api/carrito/articulos/${codigo}`, { 
      headers 
    });
  }

  postArticulos(codigo: Number, nombre: string, marca: Number, talla: Number, precio: Number) {
    const parametrosPost = new HttpParams()
      .set('codigo', codigo.toString())
      .set('producto', nombre)
      .set('marca', marca.toString())
      .set('talla', talla.toString())
      .set('precio', precio.toString());
    return this._http.post(`http://localhost/sistema-zapateria/api/index.php/api/carrito/articulos`, parametrosPost.toString(), {
      headers: new HttpHeaders() .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
}
