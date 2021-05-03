import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendserviceService {

  constructor(private http : HttpClient) { }

  public showChart(id : number)
  {
    if(id==1)
    {
      return this.http.get("http://localhost:8080/skillset-trend");
    }
    else if(id==2)
    {
      return this.http.get("http://localhost:8080/gradyear-trend");
    }
    else if(id==3)
    {
      return this.http.get("http://localhost:8080/graddiversity-trend");
    }
    else if(id==4)
    {
      return this.http.get("http://localhost:8080/gradroles-trend");
    }
    else if(id==5)
    {
      return this.http.get("http://localhost:8080/gradfeedback-trend");
    }
    
  }


  public getSkillset(){
    return this.http.get("http://localhost:8080/skillset-trend");
  }

  public getGradsYear(){
    return this.http.get("http://localhost:8080/gradyear-trend");
  }

  public getGradsDiversity(){
    return this.http.get("http://localhost:8080/graddiversity-trend");
  }

  public getFeedbackDiversity(){
    return this.http.get("http://localhost:8080/graddiversity-trend");
  }

  public getRoleDiversity(){
    return this.http.get("http://localhost:8080/graddiversity-trend");
  }


}
