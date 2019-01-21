import { Component, OnInit, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit, AfterViewChecked {
  @ViewChild('graphElement')
  private graphElement: ChartComponent;
  @Input()
  type: string = 'bar';
  @Input()
  title: string = 'Titre';
  @Input()
  data = {
    labels: [],
    datasets: []
  };
  @Input()
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
  constructor() { }

  ngOnInit() {
   
  }
  ngAfterViewChecked() {
    this.graphElement.chart.update();
  }

}
