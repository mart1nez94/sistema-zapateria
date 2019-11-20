import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { SingInComponent } from './sing-in/sing-in.component';

@NgModule({
  declarations: [SingInComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LoginModule { }
