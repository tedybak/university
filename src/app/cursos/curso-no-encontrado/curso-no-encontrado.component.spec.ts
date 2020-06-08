import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNoEncontradoComponent } from './curso-no-encontrado.component';

describe('CursoNoEncontradoComponent', () => {
  let component: CursoNoEncontradoComponent;
  let fixture: ComponentFixture<CursoNoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoNoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
