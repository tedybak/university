import { Component, OnInit } from '@angular/core';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  public alumnos: Object;
  constructor(private alumnoService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe((data) => (this.alumnos = data));
    console.log(this.alumnos);
  }
}
