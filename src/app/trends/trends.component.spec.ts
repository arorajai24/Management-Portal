import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { LogserviceService } from '../logservice.service';
import { TrendserviceService } from '../trendservice.service';

import { TrendsComponent } from './trends.component';

describe('TrendsComponent', () => {
  let component: TrendsComponent;
  let fixture: ComponentFixture<TrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendsComponent ],
      imports : [HttpClientTestingModule],
      providers : [LogserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject Trendservice using inject function and check instance',
  inject([TrendserviceService],(inj:TrendserviceService)=>{
    expect(inj).toBeTruthy();
    expect(inj instanceof TrendserviceService).toBeTruthy();
  }));

  it('should inject logservice using inject function and check instance',
  inject([LogserviceService],(inj:LogserviceService)=>{
    expect(inj).toBeTruthy();
    expect(inj instanceof LogserviceService).toBeTruthy();
  }));

});
