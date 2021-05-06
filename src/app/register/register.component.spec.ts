import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports : [ HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it("testing function", ()=>{
  //   expect(component.registerNow).toBe("propertyValue");
  // })

  // it("testing property", ()=>{
  //   expect(component.propertyname).toBe("propertyValue");
  // })

  // it("testing htlm element", ()=>{
  //   const data = fixture.nativeElement;
  //   expect(data.querySelector(".classname").textContent).toContain("Value")
  // })
});
