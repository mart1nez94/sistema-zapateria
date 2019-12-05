import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AdminService } from './../admin.service';
import { AuthenticationService } from './../../login/auth/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isAdministrador: boolean = false;
  isUsuario: boolean = false;
  usuario: string = this._adminService.datosUsuario.usuario;
  tipoUsuario: string = this._adminService.datosUsuario.tipo_usuario;
  grupo: string = this._adminService.datosUsuario.grupo;
  grupoId: string = this._adminService.datosUsuario.grupo_id;
  asignados: Array<any>;
  funcion: string;
  cargar: number = 0;

  constructor(
    private _router: Router,
    protected _adminService: AdminService,
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    if(this.tipoUsuario === 'Administrador') {
      this.isAdministrador = true;
    } else {
      this.isUsuario = true;
      this.obtenerAsignados();
    }
  }

  ingresarPermisos(): void {
    this._router.navigate(['/admin/permisos']);
  }

  ingresarGrupos(): void {
    this._router.navigate(['/admin/grupos']);
  }

  ingresarUsuarios(): void {
    this._router.navigate(['/admin/usuarios']);
  }

  obtenerAsignados() {
    this._adminService.getAsignados(Number(this.grupoId)).subscribe(resultado => {
      this.asignados = resultado;
      console.log(this.asignados);
    });
  }

  obtenerFuncion(funcion: string) {
    this.funcion = funcion;
    setTimeout(()=>{
      this.cargar = 10;
    }, 3000);
    setTimeout(()=>{
      this.cargar = 40;
    }, 4000);
    setTimeout(()=>{
      this.cargar = 80;
    }, 8000);
    setTimeout(()=>{
      this.cargar = 100;
    }, 10000);
  }

  terminarFuncion() {
    this.funcion = null;
    this.cargar = 0;
  }
}
