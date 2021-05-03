import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {

  user : any;
  obj : any;

  constructor(private service : UserserviceService, @Inject(DOCUMENT) private document : Document) { }

  ngOnInit(): void {
    let response = this.service.getAllUsers();
    response.subscribe(data => this.user = data);
  }

  public removeUser(id : number){
    let response = this.service.deleteUser(id);
    response.subscribe(data => this.user = data);
    this.document.defaultView.location.reload();
  }

  public editById(id){
    let response = this.service.findById(id);
    response.subscribe(data => this.obj = data); 
  }
}
