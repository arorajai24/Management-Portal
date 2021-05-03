import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchVar : string;
  user : any;
  message : any;
  obj : any;
  two : any;

  constructor(private route : ActivatedRoute, private service : UserserviceService, private router : Router, @Inject(DOCUMENT) private document : Document) { }

  ngOnInit(): void {
  }

  public searchByFirstname()
  {
    let response = this.service.findByFirstname(this.searchVar);
    response.subscribe(data => this.user = data); 
  }
  public removeUser(id)
  {
    let response = this.service.deleteUser(id);
    response.subscribe(data => this.user = data);
    this.document.defaultView.location.reload();
  }

  public viewById(id){
    let response = this.service.findById(id);
    response.subscribe(data => this.two = data); 
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
