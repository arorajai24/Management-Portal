import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogserviceService } from '../logservice.service';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes = [
    {"id": 1, "name":'Superman'},
    {"id": 2, "name":'Batman'},
    {"id": 5, "name":'BatGirl'},
    {"id": 3, "name":'Robin'},
    {"id": 4, "name":'Flash'}
];

  searchVar : string;
  user : User[];
  message : any;
  obj : User;
  two : any;
  str : String;
  temp : any;
  comp : User;

  constructor(private logger : LogserviceService, private route : ActivatedRoute, private service : UserserviceService, private router : Router, @Inject(DOCUMENT) private document : Document) { }

  ngOnInit(): void {
    this.logger.log("Retrieved list of all candidates. (View All Component)");
    let response = this.service.getAllUsers();
    response.subscribe(data => this.user = data);
  }

  public searchBySearchVar()
  {
    if(this.searchVar=="")
    {
      this.ngOnInit();
    }
    this.logger.log("Searching database by '"+ this.searchVar +"'");
    this.service.findBySearchVar(this.searchVar).subscribe(data => {this.user = data});
    this.logger.log("Retrieved possible matches for '"+ this.searchVar +"'");
  }
  public removeUser(id)
  {
    this.logger.log("Removing candidate with id : "+ id);
    let response = this.service.deleteUser(id);
    response.subscribe(data => this.temp = data);
    this.logger.log("Candidate with id : "+id+ " deleted successfully.");
    this.logger.log("Refreshing...")
    this.document.defaultView.location.reload();
  }

  public viewById(id){
    for(let i=0;i<this.user.length;i++)
    {
      if(this.user[i].id==id)
      {
        this.two = this.user[i];
      }
    }
  }
  
  public editById(id){
    let response = this.service.findById(id);
    response.subscribe(data => {this.obj = data
      this.comp = this.obj;
    }); 
  }

  public editNow(user_new)
  {
    this.logger.log("Editing user in database with id : "+ user_new.id);
    let reponse = this.service.doEdit(user_new);
    reponse.subscribe(data => {
      this.message = data;
      this.ngOnInit();
    });
  }

  equals(str1, str2) : boolean
  {
    if(str1==str2)
      return true;
    return false;
  }

}
