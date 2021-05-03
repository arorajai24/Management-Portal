import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  
  url;
  
  constructor(private http: HttpClient) { }

  Savesresponse(response)
  {
    this.url =  'http://localhost:8080/savesResponse';
    return this.http.post(this.url, response, {headers:{skip:"true"}});
  }

  Removeresponse(response)
  {
    this.url = 'http://localhost:8080/removeResponse';
    return this.http.get(this.url, response);
  }

}
