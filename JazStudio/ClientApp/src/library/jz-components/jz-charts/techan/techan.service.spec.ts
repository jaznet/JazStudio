import { TestBed } from '@angular/core/testing';

import { TechanService } from './techan.service';

describe('TechanService', () => {
  let service: TechanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
