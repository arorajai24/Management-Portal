import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LogserviceService } from './logservice.service';

describe('LogserviceService', () => {
  let service: LogserviceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
