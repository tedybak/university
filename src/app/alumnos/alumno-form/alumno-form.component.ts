import { Component, OnInit, OnDestroy } from '@angular/core';
import { Form } from '@angular/forms';
import { AlumnosService } from '../alumnos.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css'],
})
export class AlumnoFormComponent implements OnInit {
  inscripcion: Subscription;
  id: number;
  data: any = {};

  constructor(
    private alumnoService: AlumnosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscripcion = this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
      this.alumnoService.getAlumnoById(this.id).subscribe((data) => {
        this.data = data[0];
        if (this.data === undefined) {
          this.data = {};
        }
      });
    });
  }

  onSubmit(valores) {
    // si nos encontramos ante el formulario para anadir nuevos alumnos
    if (isNaN(this.id)) {
      this.alumnoService.addAlumno(valores).subscribe((data) => {
        this.router.navigate(['/alumnos']);
      });
    } else {
      this.alumnoService.patchAlumno(valores).subscribe((data) => {
        this.router.navigate(['alumnos', this.id]);
      });
    }
  }

  ngOndestroy() {
    this.inscripcion.unsubscribe();
    this.data = {};
  }
}
