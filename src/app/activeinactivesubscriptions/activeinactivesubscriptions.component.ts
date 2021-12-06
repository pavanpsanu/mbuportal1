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
  jsonvaluesofexcel={
    "Sheet1": [{
        "Slno": 1,
        "Name": "Test Subscription 01",
        "State": "Disabled",
        
      },
      {
        "Slno": 2,
        "Name": "Test Subscription 01",
        "State": "Disabled",
      },
      {
        "Slno": 3,
        "Name": "Test Subscription 02",
        "State": "Disabled",
      },
     
    ]
  }
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

}
