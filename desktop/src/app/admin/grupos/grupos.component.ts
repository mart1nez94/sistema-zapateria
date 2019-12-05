import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {
  grupos: Array<any>;
  grupo: number;
  permisos: Array<any>;
  asignados: Array<any>;

  constructor(protected _adminService: AdminService) { 
    PNotifyButtons;
  }

  ngOnInit() {
    this.obtenerGrupos();
    this.obtenerPermisos();
  }

  obtenerGrupos() {
    this._adminService.getGrupos().subscribe(resultado => {
      this.grupos = resultado;
    });
  }

  obtenerPermisos() {
    this._adminService.getPermisos().subscribe(resultado => {
      this.permisos = resultado;
    });
  }

  obtenerAsignados(grupo: number) {
    this.grupo = grupo;
    this._adminService.getAsignados(grupo).subscribe(resultado => {
      this.asignados = resultado;
    });
  }

  crearGrupo(nombreGrupo: string) {
    this._adminService.postGrupos(nombreGrupo).subscribe(resultado => {
      if(resultado >= 1) {
        PNotify.success({
          title: "Grupo añadido"
        });
        this.obtenerGrupos();
      } else {
        PNotify.error({
          title: "Error",
          text: "Intente nuevamente"
        });
      }
    });
  }

  crearAsignacion(permiso: number) {
    let estado: number = 0;
    let encontrado: boolean = false;
    if(this.asignados) {
      for(let asignado of this.asignados) {
        if(asignado.permiso_id == permiso) {
          encontrado = true;
        }
      }
    }
    if(encontrado == true) {
      this._adminService.putAsignados(this.grupo, permiso, 0).subscribe(resultado => {
        PNotify.info({
          title: 'Permiso AÑADIDO del grupo'
        });
        this.obtenerAsignados(this.grupo);
      });
    } else {
      this._adminService.putAsignados(this.grupo, permiso, 1).subscribe(resultado => {
        PNotify.info({
          title: 'Permiso ELIMINADO del grupo'
        });
        this.obtenerAsignados(this.grupo);
      })
    }
  }
}
