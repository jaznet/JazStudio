import { TestBed } from '@angular/core/testing';

import { SyncLicService } from './sync-lic.service';

describe('SyncLicService', () => {
  let service: SyncLicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncLicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
