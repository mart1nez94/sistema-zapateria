import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './auth/authentication.service';
import { first } from 'rxjs/operators';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _router: Router, 
    protected _loginService: LoginService,
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService
  ) { 
    PNotifyButtons;
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  ingresar() {
    this._loginService.getUsuarios(this.loginForm.value.usuario, this.loginForm.value.contrasena).subscribe(resultado => {
      if(resultado != null) {
        this._authenticationService.login(this.loginForm.value.usuario, this.loginForm.value.contrasena).pipe(first()).subscribe(ingreso => {
          this._router.navigate(['/dashboard']);
        });
      }
      else {
        PNotify.error({
          title: "Error",
          text: "Intente nuevamente"
        });
        this._authenticationService.logout();
      }
    }, err => {
      PNotify.error({
        title: "Error en la base de datos",
        text: "Intente nuevamente"
      })
    });
  }
}