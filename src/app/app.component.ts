import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rutas';
  mostrarMenu = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.emisor.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }
}
