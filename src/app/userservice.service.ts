import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http : HttpClient) { }

  public getAllUsers(){
    return this.http.get("http://localhost:8080/allusers");
  }

  public deleteUser(id){
    return this.http.get("http://localhost:8080/delete-user/"+id);
  }

  public doRegistration(user){
    return this.http.post("http://localhost:8080/save-user",user, {responseType : "text" as "json"});
  }

  public doEdit(user){
    return this.http.post("http://localhost:8080/edit-user",user, {responseType : "text" as "json"});
  }

  public findBySearchVar(fname) : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/search/"+fname);
  }
  
  public findById(id){
    return this.http.get("http://localhost:8080/findById/"+id);
  }
}
