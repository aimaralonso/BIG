import { TestBed } from '@angular/core/testing';

import { PlateraService } from './platera.service';

describe('PlateraService', () => {
  let service: PlateraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlateraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
