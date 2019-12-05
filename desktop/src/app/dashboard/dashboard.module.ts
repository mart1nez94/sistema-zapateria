import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PuntoComponent } from './punto/punto.component';
import { AltaComponent } from './alta/alta.component';

@NgModule({
  declarations: [MainComponent, PuntoComponent, AltaComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
