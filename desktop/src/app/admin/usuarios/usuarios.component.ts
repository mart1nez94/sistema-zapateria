import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  grupos: Array<any>;
  grupo: number;
  grupoNombre: string = 'Sin seleccionar';

  constructor(protected _adminService: AdminService) {
    PNotifyButtons;
  }

  ngOnInit() {
    this.obtenerGrupos();
  }

  obtenerGrupos() {
    this._adminService.getGrupos().subscribe(resultado => {
      this.grupos = resultado;
    });
  }

  guardarGrupo(grupo: number, grupoNombre: string){
    this.grupo = grupo;
    this.grupoNombre = grupoNombre;
  }

  insertarUsuarios(usuario: string, contrasena: string) {
    if(this.grupo) {
      this._adminService.postUsuarios(usuario, contrasena, this.grupo).subscribe(resultado => {
        PNotify.success({
          title: "Usuario añadido"
        });
      });
    }
  }
}
