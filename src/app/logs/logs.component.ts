import { Component, OnInit } from '@angular/core';
import { logs } from '../logs';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logger : string[];
  datalog : string[];
  msg : string[];
  logData : any;
  parser : Array<logs> = [];
  str : string[];
  constructor(private service : UserserviceService) { }

  ngOnInit(): void {
    this.service.retrieveLogs().subscribe((data) => {
      this.logger = data
      for(let i=0;i<this.logger.length;i++)
      {
        this.str = this.logger[i].split("   ;   ");
        this.parser.push(new logs(this.str[0],this.str[1].trim(),this.str[2]));
      }
      console.log(this.parser[0].datetime);
      console.log(this.parser[0].msg);
      console.log(this.parser[0].user);
    });
  }

}
