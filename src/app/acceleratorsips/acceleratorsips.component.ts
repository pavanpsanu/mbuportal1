import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceleratorsips',
  templateUrl: './acceleratorsips.component.html',
  styleUrls: ['./acceleratorsips.component.css']
})
export class AcceleratorsipsComponent implements OnInit {
// bloburl="https://viewdatainexcel.blob.core.windows.net/testcontainer/Accelerator.xlsx"


jsonvaluesofexcel= {
  "Sheet1": [
    {
      "Slno": 1,
      "SubscriptioName": "TCS CUBO Marketplace_API Management",
      "AcceleratorIp": "TCS-CUBO",
      "Description": "Online marketplace for partners to publish their product APIs",
      "Createdon": "07/29/20",
      "Comments": "150+ Partner web pages are already published in prod"
    },
    {
      "Slno": 2,
      "SubscriptioName": "DevSecOps PoC mbu_dataai",
      "AcceleratorIp": "DevSec Ops Accelarator",
      "Description": "Hosting web application, containerized web application in Azure App Service",
      "Createdon": "02/18/21",
      "Comments": "Accelarates the deployment of diff azure web apps"
    },
    {
      "Slno": 3,
      "SubscriptioName": "Intelligent_data_services_poc ABN Amro_Smart Document",
      "AcceleratorIp": "AI Data Service",
      "Description": "Data AI intelligent data services Document Automation with Intelligence",
      "Createdon": "11/24/20",
      "Comments": "NA"
    },
    {
      "Slno": 4,
      "SubscriptioName": "Capturing System",
      "AcceleratorIp": "DAWIN",
      "Description": "Smart Document Capturing System",
      "Createdon": "10/01/20",
      "Comments": "NA"
    }
  ]
}
  constructor() { }

  ngOnInit(): void {
    console.log(this.jsonvaluesofexcel.Sheet1)
  }

}
