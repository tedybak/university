import { Component, OnInit } from '@angular/core';
import { CursossService } from './cursoss.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  data: any;
  constructor(private cursosService: CursossService) {}

  ngOnInit(): void {
    this.data = this.cursosService.getCursos();
  }
}
