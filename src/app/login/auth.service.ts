import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado = false;
  public emisor = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  hacerLogin(usuario: Usuario) {
    if (
      usuario.nombre === 'motadi@hotmail.com' &&
      usuario.password === 'Estocolmo1'
    ) {
      this.usuarioAutenticado = true;
      this.emisor.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.emisor.emit(false);
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.usuarioAutenticado = false;
    this.emisor.emit(false);
    this.router.navigate(['/login']);
  }
}
