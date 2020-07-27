import { DetalleCalificacionesComponent } from './detalle-calificaciones/detalle-calificaciones.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { AuthGuard } from '../guards/auth.guard';

const alumnosRoutes: Routes = [
  {
    path: '',
    component: AlumnosComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'novo', component: AlumnoFormComponent },
      {
        path: ':id',
        component: AlumnoDetalleComponent,
        children: [
          {
            path: 'detalles',
            component: DetalleCalificacionesComponent,
          },
        ],
      },
      { path: ':id/editar', component: AlumnoFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(alumnosRoutes)],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
