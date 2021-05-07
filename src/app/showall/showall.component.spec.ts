import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { LogserviceService } from '../logservice.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShowallComponent } from './showall.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserserviceService } from '../userservice.service';

describe('ShowallComponent', () => {
  let component: ShowallComponent;
  let fixture: ComponentFixture<ShowallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([])  ],
      providers : [LogserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject Userservice using inject function and check instance',
  inject([UserserviceService],(inj:UserserviceService)=>{
    expect(inj).toBeTruthy();
    expect(inj instanceof UserserviceService).toBeTruthy();
  }));

  it('should inject Logservice using inject function and check instance',
  inject([LogserviceService],(inj:LogserviceService)=>{
    expect(inj).toBeTruthy();
    expect(inj instanceof LogserviceService).toBeTruthy();
  }));
});
