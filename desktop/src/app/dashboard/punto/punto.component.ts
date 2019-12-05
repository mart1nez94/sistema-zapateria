import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';

@Component({
  selector: 'app-punto',
  templateUrl: './punto.component.html',
  styleUrls: ['./punto.component.scss']
})
export class PuntoComponent implements OnInit {
  carrito: Array<any> = [];
  precio: Number = 0;
  productos: Number = 0;
  index: Number = 0;

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit() {
  }

  buscar(codigo: number) {
    this._dashboardService.getArticulos(codigo).subscribe(resultado => {
      this.carrito.push({ "codigo":resultado[0].codigo, "nombre":resultado[0].marca + " - " + resultado[0].nombre, "talla":resultado[0].talla, "precio":resultado[0].precio });
      this.precio = (Number(this.precio) + Number(resultado[0].precio));
      this.productos = Number(this.productos) + 1;
    }, err => {

      console.log(err);
    })
  }

}
