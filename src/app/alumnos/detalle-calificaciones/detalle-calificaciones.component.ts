import { Subscription } from 'rxjs';
import { AlumnosService } from './../alumnos.service';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AlumnosNotasService } from '../alumnos-notas.service';

@Component({
  selector: 'app-detalle-calificaciones',
  templateUrl: './detalle-calificaciones.component.html',
  styleUrls: ['./detalle-calificaciones.component.css'],
})
export class DetalleCalificacionesComponent implements OnInit {
  inscripcion: Subscription;
  matricula: string;
  alumno: any;
  id;
  notas: any;
  mostrar: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notasService: AlumnosNotasService
  ) {}

  ngOnInit(): void {
    let url = this.router.url;
    const paths = url.split('/');
    this.id = paths[2];

    this.notasService.getNotasAlumnoById(this.id).subscribe((data) => {
      this.notas = data;
    });
  }
}
