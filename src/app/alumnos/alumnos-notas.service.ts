import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlumnosNotasService {
  constructor(private http: HttpClient) {}
  getNotasAlumnos() {
    return this.http.get(`http://localhost:3000/notas`);
  }

  getNotasAlumnoById(id) {
    return this.http.get(`http://localhost:3000/alumnos/${id}/notas`);
  }
}
