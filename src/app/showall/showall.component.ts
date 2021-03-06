import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogserviceService } from '../logservice.service';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {

  user : User[];
  obj : any;
  message : any;

  constructor(private router : Router, private logger : LogserviceService, private service : UserserviceService, @Inject(DOCUMENT) private document : Document) { }

  ngOnInit(): void {
    this.logger.log("Retrieved list of all candidates. (View All Page)");
    let response = this.service.getAllUsers();
    response.subscribe(data => this.user = data);
  }

  public removeUser(id : number){
    let response = this.service.deleteUser(id);
    response.subscribe(data =>{ 
      this.message = data
      this.logger.log("Candidate with id : "+id+ " deleted successfully.");
      this.ngOnInit();
    });
  }

  public viewById(id){
    for(let i=0;i<this.user.length;i++)
    {
      if(this.user[i].id==id)
      {
        this.obj = this.user[i];
      }
    }
  }
}
