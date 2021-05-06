import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogserviceService } from '../logservice.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShowallComponent } from './showall.component';

describe('ShowallComponent', () => {
  let component: ShowallComponent;
  let fixture: ComponentFixture<ShowallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallComponent ],
      imports: [ HttpClientTestingModule ],
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
});
