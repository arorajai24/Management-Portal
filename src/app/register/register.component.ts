import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogserviceService } from '../logservice.service';
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

  constructor(@Inject(DOCUMENT) private document : Document, private router : Router, private logger : LogserviceService, private service : UserserviceService) { }

  ngOnInit(): void {
    this.logger.log("Landed on register candidate page.")
  }

  public registerNow(){
    let reponse = this.service.doRegistration(this.user);
    reponse.subscribe(data => {
      this.message = data;
      this.logger.log("User registered by name: "+ this.user.fname + " " + this.user.lname+".");
    });
  }

}
