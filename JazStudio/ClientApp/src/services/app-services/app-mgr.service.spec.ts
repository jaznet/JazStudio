import { TestBed } from '@angular/core/testing';

import { PaletteMgrService } from './app-mgr.service';

describe('PaletteMgrService', () => {
  let service: PaletteMgrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaletteMgrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
