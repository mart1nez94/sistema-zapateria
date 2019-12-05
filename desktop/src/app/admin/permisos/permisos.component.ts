import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit {

  permisos: Array<any>;

  constructor(protected _adminService: AdminService) { 
    PNotifyButtons;
  }

  ngOnInit() {
    this.obtenerPermisos();
  }

  crearPermiso(nombrePermiso: string) {
    this._adminService.postPermisos(nombrePermiso).subscribe(resultado => {
      if(resultado >= 1)
      {
        PNotify.success({
          title: "Permiso añadido"
        });
        this.obtenerPermisos();
      } else 
      {
        PNotify.error({
          title: "Error",
          text: "Intente nuevamente"
        });
      }
    });
  }

  obtenerPermisos() {
    this._adminService.getPermisos().subscribe(resultado => {
      this.permisos = resultado;
    });
  }
}