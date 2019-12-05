import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './admin/menu/menu.component';
import { PermisosComponent } from './admin/permisos/permisos.component';
import { GruposComponent } from './admin/grupos/grupos.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';

import { MainComponent } from './dashboard/main/main.component';
import { PuntoComponent } from './dashboard/punto/punto.component';
import { AltaComponent } from './dashboard/alta/alta.component';

import { LoginService } from './login/login.service';
import { AdminService } from './admin/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    MenuComponent,
    PermisosComponent,
    GruposComponent,
    UsuariosComponent,
    MainComponent,
    PuntoComponent,
    AltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
