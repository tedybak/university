import { Subscribable } from 'rxjs';
import { Alumno } from './../interfaces/alumno.interface';
import { Component, OnInit } from '@angular/core';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  public alumnos: any;
  constructor(private alumnoService: AlumnosService) {}

  ngOnInit() {
    this.alumnoService.getAlumnos().subscribe((datos) => {
      this.alumnos = datos;
    });
  }
}
