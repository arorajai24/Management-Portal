import { Component, OnInit } from '@angular/core';
import { DataItem, Series } from '@swimlane/ngx-charts';
import { ChartDataModel, SeriesModel } from '../chartDataModel';
import { LogserviceService } from '../logservice.service';
import { TrendserviceService } from '../trendservice.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  keys : Array<string> = new Array();
  values : Array<number> = new Array();
  temp : number;
  parseData : any;
  parser : any;

  constructor(private logger : LogserviceService, private trend : TrendserviceService) { }

  ngOnInit(): void {
  }
 
  chart = [
    { id : 1 , value : "Skillset Among Candidates"},
    { id : 2 , value : "Candidates joined each year"},
    { id : 3 , value : "Joining Location of Grads"},
    { id : 4 , value : "Feedback Vs Candidate"},
    { id : 5 , value : "Role Diversity in Accolite"},
  ];
  openChart(id : number)
  {
    this.parseData = [];
    this.parser = [];
    this.trend.showChart(id).subscribe((data: any) => {
      console.log(data);
      Object.keys(data).map(key=>this.parseData.push({name : key , value : data[key]}));
      console.log(this.parseData);
      this.parser=this.parseData;
      });
    this.logger.log("Display of chart : " + this.chart[id-1].value +" on Trends Component.");
    this.temp = id;
  }
}
