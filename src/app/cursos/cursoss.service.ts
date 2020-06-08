import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursossService {
  constructor() {}

  getCursos() {
    return [
      {
        id: 1,
        nombre: 'Java',
      },
      {
        id: 2,
        nombre: 'Angular 2',
      },
      {
        id: 3,
        nombre: 'Php Mastering',
      },
    ];
  }

  getCursosPorId(id) {
    const cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];

      if (id == curso.id) {
        return curso;
      }
    }
  }
}
