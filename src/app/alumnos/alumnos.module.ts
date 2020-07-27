import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosComponent } from './alumnos.component';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';
import { AlumnosRoutingModule } from './alumnos.routing.module';
import { AlumnosService } from './alumnos.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetalleCalificacionesComponent } from './detalle-calificaciones/detalle-calificaciones.component';
import { AlumnosNotasService } from './alumnos-notas.service';

@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoFormComponent,
    AlumnoDetalleComponent,
    DetalleCalificacionesComponent,
  ],
  imports: [CommonModule, AlumnosRoutingModule, FormsModule, HttpClientModule],

  exports: [],
  providers: [AlumnosService, AlumnosNotasService],
})
export class AlumnosModule {}
