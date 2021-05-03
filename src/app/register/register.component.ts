import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dummy_date : Date = new Date("2020-01-01"); 
  user = new User(0,"","","",null,"","","","",this.dummy_date,"","","","");
  message : any;

  constructor(private service : UserserviceService) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let reponse = this.service.doRegistration(this.user);
    reponse.subscribe(data => {
      this.message = data;
    });
  }
}
