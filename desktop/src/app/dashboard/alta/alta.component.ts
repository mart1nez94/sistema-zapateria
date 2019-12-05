import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  constructor(private _dashboardService: DashboardService) { PNotifyButtons; }

  ngOnInit() {
  }

  insertarProductos(codigo: Number, nombre: string, marca: Number, talla: Number, precio: Number) {
    this._dashboardService.postArticulos(codigo, nombre, marca, talla, precio).subscribe(resultado => {
      PNotify.success({
        title: "Producto añadido"
      });
    });
  }
}
