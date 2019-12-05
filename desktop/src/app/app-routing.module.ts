import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import Button from '@material-ui/core/Button';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './admin/menu/menu.component';
import { PermisosComponent } from './admin/permisos/permisos.component';
import { GruposComponent } from './admin/grupos/grupos.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { AuthGuard } from './login/auth/auth.guard';
import { MainComponent } from './dashboard/main/main.component';
import { PuntoComponent } from './dashboard/punto/punto.component';
import { AltaComponent } from './dashboard/alta/alta.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent,
    canActivate: [AuthGuard]    
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'admin', 
    component: AdminComponent,
    canActivate: [AuthGuard], 
    children: [
      {
        path: '',
        component: MenuComponent
      }, {
        path: 'permisos', 
        component: PermisosComponent
      }, { 
        path: 'grupos', 
        component: GruposComponent 
      }, { 
        path: 'usuarios', 
        component: UsuariosComponent }]
  }, {
    path: 'dashboard',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PuntoComponent
      },
      {
        path: 'alta',
        component: AltaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
