import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('src/app/cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'alumnos',
    loadChildren: () =>
      import('src/app/alumnos/alumnos.module').then((m) => m.AlumnosModule),
  },

  { path: 'login', component: LoginComponent },
  { path: 'home', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
