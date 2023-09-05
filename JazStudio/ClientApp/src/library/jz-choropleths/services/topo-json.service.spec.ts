import { TestBed } from '@angular/core/testing';

import { TopoJsonService } from './topo-json.service';

describe('TopoJsonService', () => {
  let service: TopoJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopoJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
