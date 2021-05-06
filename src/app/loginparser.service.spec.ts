import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';

import { LoginparserService } from './loginparser.service';
import { SocialloginService } from './sociallogin.service';

describe('LoginparserService', () => {
  let service: LoginparserService;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers : [LoginparserService, SocialloginService, SocialAuthService, 
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  '859429172963-vtq8gbqqitma1cta7br669tc8t1cj8vb.apps.googleusercontent.com'
                )
              }
            ]
          } as SocialAuthServiceConfig,
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginparserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
