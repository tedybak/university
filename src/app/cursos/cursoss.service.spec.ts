import { TestBed } from '@angular/core/testing';

import { CursossService } from './cursoss.service';

describe('CursossService', () => {
  let service: CursossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
