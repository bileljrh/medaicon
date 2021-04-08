import { TestBed } from '@angular/core/testing';

import { MarkerService } from './map.service';

describe('MapService', () => {
  let service: MarkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
