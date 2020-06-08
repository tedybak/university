import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  procesar() {
    this.authService.hacerLogin(this.usuario);
  }
}
