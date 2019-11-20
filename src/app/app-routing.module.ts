import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importando Componente "Sing-In"
import { SingInComponent } from './login/sing-in/sing-in.component';

const routes: Routes = [
  {
    path: '', // /
    component: SingInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
