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
  obj : any;
  two : any;
  str : string;
  temp : any;

  constructor(private logger : LogserviceService, private route : ActivatedRoute, private service : UserserviceService, private router : Router, @Inject(DOCUMENT) private document : Document) { }

  ngOnInit(): void {

  }

  public searchBySearchVar()
  {
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
    response.subscribe(data => this.obj = data); 
  }

  public editNow(user_new)
  {
    this.logger.log("Editing user in database with id : "+ user_new.id);
    console.log(user_new);
    let reponse = this.service.doEdit(user_new);
    reponse.subscribe(data => {
      this.message = data;
    });

    this.str = "";    
    if(!this.equals(this.obj.contact, user_new.contact))
			this.str = this.str.concat(" contact is edited from "+this.obj.contact+" to "+ user_new.contact+" & ");
		if(!this.equals(this.obj.address, user_new.address))
      this.str = this.str.concat(" address is edited from "+this.obj.address+" to "+ user_new.address+" & ");
		if(!this.equals(this.obj.feedback, user_new.feedback))
      this.str = this.str.concat(" feedback is edited from "+this.obj.feedback+" to "+ user_new.feedback+" & ");
		if(!this.equals(this.obj.role, user_new.role))
      this.str = this.str.concat(" role is edited from "+this.obj.role+" to "+ user_new.role+" & ");
		if(!this.equals(this.obj.location, user_new.location))
      this.str = this.str.concat(" location is edited from "+this.obj.location+" to "+ user_new.location+" & ");
		if(!this.equals(this.obj.skillset, user_new.skillset))
      this.str = this.str.concat(" skillset is edited from "+this.obj.skillset+" to "+ user_new.skillset+" & ");
    
    this.logger.log(this.obj.id + " is edited successfully where "+ this.str +" successfully.");
    this.logger.log("Refreshing...")
    //this.document.defaultView.location.reload();
  }

  equals(str1, str2) : boolean
  {
    if(str1==str2)
      return true;
    return false;
  }

}
