import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, input, AfterContentChecked, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { merge } from 'rxjs';




@Component({
  selector: 'app-log-chart',
  standalone: true,
  imports: [
    CommonModule,
    NgxEchartsDirective
  ],
  templateUrl: './log-chart.component.html',
  styleUrls: ['./log-chart.component.css']  // Make sure the correct key is styleUrls (plural)
})

export class LogChartComponent  implements AfterContentChecked{
  myChart: echarts.EChartsOption | null = null; // Store the chart instance
  isLogDisplayed: boolean = false

  chartOption: echarts.EChartsOption
  updateOptions: any
  
  

  // This method runs after the component's view is initialized
  ngAfterContentChecked(): void {
    // Make sure the DOM element is available after the view is initialize
   if (!this.isLogDisplayed)
  this.chartOption  = { 
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
       series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    if (this.isLogDisplayed)
     this.updateOptions = {
       ...this.chartOption,
       
       yAxis: {
        type: 'log'
       },
      
      }
      
    
      }
  onSwitchFreqView() {
    this.isLogDisplayed = !this.isLogDisplayed 
    console.log(this.isLogDisplayed)
    
    
  }

}
