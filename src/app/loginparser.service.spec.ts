import { TestBed } from '@angular/core/testing';

import { LoginparserService } from './loginparser.service';

describe('LoginparserService', () => {
  let service: LoginparserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginparserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
