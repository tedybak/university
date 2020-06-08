import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursoNoEncontradoComponent } from './curso-no-encontrado/curso-no-encontrado.component';

const cursosRoutes: Routes = [
  {
    path: '',
    component: CursosComponent,
    children: [
      { path: 'notfound', component: CursoNoEncontradoComponent },
      { path: ':id', component: CursoDetalleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
