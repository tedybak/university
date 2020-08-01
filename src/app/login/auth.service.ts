import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

import { ApiResponse } from '../interfaces/apiResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado = false;
  public emisor = new EventEmitter<boolean>();
  constructor(private router: Router, private http: HttpClient) {}

  usuarioRegistrado: any;
  hacerLogin(usuario: Usuario) {
    this.http
      .post<ApiResponse>(`http://localhost:3000/login`, usuario)
      .subscribe((data) => {
        this.usuarioRegistrado = data;
      });
    if (this.usuarioRegistrado.status == true) {
      this.usuarioAutenticado = true;
      this.emisor.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.emisor.emit(false);
      this.router.navigate(['/not-registered']);
    }
  }

  logout() {
    this.usuarioAutenticado = false;
    this.emisor.emit(false);
    this.router.navigate(['/login']);
  }
}
