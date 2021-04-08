import { TestBed } from '@angular/core/testing';

import { AuthrouteService } from './authroute.service';

describe('AuthrouteService', () => {
  let service: AuthrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
