import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { LogserviceService } from '../logservice.service';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports : [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers : [LogserviceService, UserserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Search Component', () => {
    expect(component).toBeTruthy();
  });

  // it("tracks all the arguments of its calls", function() {
  //   expect(tape.rewind).toHaveBeenCalledWith(0);
  // });

// it('should foobar', () => {
//     var http : HttpClient;
//     var service : UserserviceService = new UserserviceService(http);
//     spyOn(service, 'findBySearchVar');
//     component.searchBySearchVar();
//     expect(service.findBySearchVar).toHaveBeenCalledWith("text");
// })

  it("testing equals function : Test Case 1", ()=>{
    expect(component.equals("One","One")).toBe(true);
  })
  it("testing equals function : Test Case 2", ()=>{
    expect(component.equals("One","Two")).toBe(false);
  })
  
  it('should inject User service using inject function and check instance',
  inject([UserserviceService],(inj:UserserviceService)=>{
    expect(inj).toBeTruthy();
    expect(inj instanceof UserserviceService).toBeTruthy();
  }));

  it('should inject Logservice service using inject function and check instance',
  inject([LogserviceService],(inj:LogserviceService)=>{
    expect(inj).toBeTruthy();
    expect(inj instanceof LogserviceService).toBeTruthy();
  }));
});
