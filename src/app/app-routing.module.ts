import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importando Componente "Sing-In"
import { SingInComponent } from './login/sing-in/sing-in.component';
//Importando Componente "Register"
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [
  {
    path: '', // /
    component: SingInComponent
  },
  {
    path: 'registrar', // /registrar
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
