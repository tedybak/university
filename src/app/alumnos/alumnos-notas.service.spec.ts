import { TestBed } from '@angular/core/testing';

import { AlumnosNotasService } from './alumnos-notas.service';

describe('AlumnosNotasService', () => {
  let service: AlumnosNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
