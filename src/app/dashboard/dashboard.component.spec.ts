import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';
import { LoginparserService } from '../loginparser.service';
import { LogserviceService } from '../logservice.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports : [ HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers : [LogserviceService, LoginparserService, SocialAuthService,
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing UserService Injection',
  inject([LoginparserService],(inj:LoginparserService)=>{
    expect(inj).toBeTruthy();
    expect(inj instanceof LoginparserService).toBeTruthy();
  }));

  it('Testing Logservice : should inject service using inject function and check instance',
  inject([LogserviceService],(inj:LogserviceService)=>{
    expect(inj).toBeTruthy();
    expect(inj instanceof LogserviceService).toBeTruthy();
  }));
});
