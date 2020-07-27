import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  constructor(private router: Router, private http: HttpClient) {}

  getAlumnos() {
    return this.http.get(`http://localhost:3000/alumnos`);
  }

  getAlumnoById(id) {
    return this.http.get(`http://localhost:3000/alumnos/${id}`);
  }

  addAlumno(id) {
    return this.http.get(`http://localhost:3000/notas/${id}`);
  }

  patchAlumno(id) {
    return this.http.get(`http://localhost:3000/notas/${id}`);
  }
}
