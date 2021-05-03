import { Component, OnInit } from '@angular/core';
import { TrendserviceService } from '../trendservice.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  data : any;
  temp : number;
  constructor(private trend : TrendserviceService) { }

  ngOnInit(): void {
  }

  openChart(id : number)
  {
    this.data = this.trend.showChart(id);
    this.temp = id;
  }
}
