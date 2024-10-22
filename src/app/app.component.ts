import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppAnotherComponent } from "./app-another/app-another.component";
import { privateDecrypt } from 'crypto';
import { MatCommonModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { LogChartComponent } from "./log-chart/log-chart.component";
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: "app.component.html",
  providers: [
    provideEcharts(),
  ],
  styleUrls: ['./app.component.css'],
  imports: [MatSidenavModule, MatSlideToggleModule, MatCommonModule, AppAnotherComponent, LogChartComponent, NgxEchartsDirective],
})
export class AppComponent {
  
}
