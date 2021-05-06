import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SocialloginService } from './sociallogin.service';

describe('SocialloginService', () => {
  let service: SocialloginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
