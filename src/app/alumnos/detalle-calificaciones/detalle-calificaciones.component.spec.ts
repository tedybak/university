import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCalificacionesComponent } from './detalle-calificaciones.component';

describe('DetalleCalificacionesComponent', () => {
  let component: DetalleCalificacionesComponent;
  let fixture: ComponentFixture<DetalleCalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
