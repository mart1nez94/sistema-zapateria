import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { SingInComponent } from './sing-in/sing-in.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [SingInComponent, RegisterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LoginModule { }
