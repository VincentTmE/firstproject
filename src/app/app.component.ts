import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppAnotherComponent } from "./app-another/app-another.component";
import { privateDecrypt } from 'crypto';
import { MatCommonModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { LogChartComponent } from "./log-chart/log-chart.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: "app.component.html",
  
  styleUrls: ['./app.component.css'],
  imports: [MatSidenavModule, MatSlideToggleModule, MatCommonModule, AppAnotherComponent, LogChartComponent],
})
export class AppComponent {
  
}
