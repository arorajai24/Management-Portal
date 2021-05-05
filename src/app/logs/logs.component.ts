import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs : any;
  data : string[];
  msg : string[];
  logData : any;
  constructor(private service : UserserviceService) { }

  ngOnInit(): void {
    this.service.retrieveLogs().subscribe(data => {this.logs = data});
    this.data = this.logs;
    
  }

}
