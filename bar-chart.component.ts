import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  // Sample data
  barChartData = [
    { label: 'Red', value: 12, color: 'red' },
    { label: 'Blue', value: 19, color: 'blue' },
    { label: 'Yellow', value: 3, color: 'yellow' },
    { label: 'Green', value: 5, color: 'green' },
    { label: 'Purple', value: 2, color: 'purple' },
    { label: 'Orange', value: 8, color: 'orange' }
  ];
}
