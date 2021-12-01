import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-activeinactivesubscriptions',
  templateUrl: './activeinactivesubscriptions.component.html',
  styleUrls: ['./activeinactivesubscriptions.component.css']
})
export class ActiveinactivesubscriptionsComponent implements OnInit {
  
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['ACTIVE' , 'INACTIVE' ];
  public pieChartData: SingleDataSet = [0, 3];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

}
