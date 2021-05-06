import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TrendserviceService } from './trendservice.service';

describe('TrendserviceService', () => {
  let service: TrendserviceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers : [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendserviceService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
