import { TestBed } from '@angular/core/testing';

import { StaticAuthenticationService } from './static-authentication.service';

describe('StaticAuthenticationService', () => {
  let service: StaticAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
