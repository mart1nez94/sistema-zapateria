import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthenticationService } from './../../login/auth/authentication.service';
import { DashboardService } from './../dashboard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  usuario: string = this._dashboardService.datosUsuario.nombre + ' ' + this._dashboardService.datosUsuario.apellido;

  constructor(private _authenticationService: AuthenticationService,
    private _router: Router,
    protected _dashboardService: DashboardService) { }

  ngOnInit() {
  }

  salir(): void {
    this._authenticationService.logout();
    this._router.navigate(['']);
  }
}
