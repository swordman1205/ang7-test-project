import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class HomeChartComponent implements OnInit {

  @Input() dataChart: any;

  constructor() { }

  ngOnInit() {
  }

}
