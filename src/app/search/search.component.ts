import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route : ActivatedRoute, private service : UserserviceService, private router : Router, @Inject(DOCUMENT) private document : Document) { }

  ngOnInit(): void {

  }

  public searchByFirstname()
  {
    let response = this.service.findByFirstname(this.searchVar).subscribe(data => {console.log(data)
    this.user = data
    console.log("check-0")
      console.log(this.user);
      });
      
    // response.subscribe(data => this.user = data);
    // console.log("CHeck 1");
    // console.log(response);
    // console.log(this.parse);
  }
  public removeUser(id)
  {
    let response = this.service.deleteUser(id);
    // response.subscribe(data => this.user = data);
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
    // let response = this.service.findById(id);
    // response.subscribe(data => this.two = data);
    // console.log(this.user); 
  }
  
  public editById(id){
    let response = this.service.findById(id);
    response.subscribe(data => this.obj = data); 
  }

  public editNow(user_new)
  {
    let reponse = this.service.doEdit(user_new);
    reponse.subscribe(data => {
      this.message = data;
    });
  }

}
