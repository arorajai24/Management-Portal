import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  str : string;
  res : any;
  message:any;
  constructor(private http : HttpClient) { }

  log(msg: any) {
    this.str = localStorage.getItem('name')+" "+localStorage.getItem('email') +"   ;   " + msg;
    this.res = this.http.post("http://localhost:8080/api/logs",this.str,{responseType : "text" as "json"});
    this.res.subscribe(data => {
      this.message = data;
    });
  }
}

// msg = (Operation) + Text.  
