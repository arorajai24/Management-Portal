import { Component, OnInit } from '@angular/core';
import { DataItem, Series } from '@swimlane/ngx-charts';
import { ChartDataModel, SeriesModel } from '../chartDataModel';
import { TrendserviceService } from '../trendservice.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  keys : Array<string> = new Array();
  values : Array<number> = new Array();
  // ngxData : ChartDataModel = {
  //     name : 'Skills',
  //     value : 0
  // };
  temp : number;
  parseData : any;
  parser : any;

  constructor(private trend : TrendserviceService) { }

  ngOnInit(): void {
  }

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
    this.temp = id;
  }
}
