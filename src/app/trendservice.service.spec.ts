import { TestBed } from '@angular/core/testing';

import { TrendserviceService } from './trendservice.service';

describe('TrendserviceService', () => {
  let service: TrendserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
