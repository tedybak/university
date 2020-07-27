import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  mostrar = false;

  canActivate() {
    this.authService.emisor.subscribe((mostrar) => (this.mostrar = mostrar));
    if (this.mostrar == true) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
