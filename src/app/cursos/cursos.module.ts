import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursoNoEncontradoComponent } from './curso-no-encontrado/curso-no-encontrado.component';
import { CursosRoutingModule } from './cursos.routing.module';
import { CursossService } from './cursoss.service';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalleComponent,
    CursoNoEncontradoComponent,
  ],
  imports: [CommonModule, CursosRoutingModule],

  exports: [],
  providers: [CursossService],
})
export class CursosModule {}
