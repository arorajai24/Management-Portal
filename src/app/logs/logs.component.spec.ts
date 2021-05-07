import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { UserserviceService } from '../userservice.service';

import { LogsComponent } from './logs.component';

describe('LogsComponent', () => {
  let component: LogsComponent;
  let fixture: ComponentFixture<LogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsComponent ],
      imports : [HttpClientTestingModule],
      providers : [UserserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject service using inject function and check instance',
  inject([UserserviceService],(inj:UserserviceService)=>{
    expect(inj).toBeTruthy();
    expect(inj instanceof UserserviceService).toBeTruthy();
  }));
  
});
