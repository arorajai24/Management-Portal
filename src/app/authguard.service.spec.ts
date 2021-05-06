import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthguardService } from './authguard.service';


describe('AuthguardService', () => {
  let service: AuthguardService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
