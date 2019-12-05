import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AdminService } from './admin.service';
import { AuthenticationService } from './../login/auth/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isAdministrador: boolean = false;
  isUsuario: boolean = false;
  usuario: string = this._adminService.datosUsuario.usuario;
  tipoUsuario: string = this._adminService.datosUsuario.tipo_usuario;
  grupo: string = this._adminService.datosUsuario.grupo;

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

  salir(): void {
    this._authenticationService.logout();
    this._router.navigate(['']);
  }
}
