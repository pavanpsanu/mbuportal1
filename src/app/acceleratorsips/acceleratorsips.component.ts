import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceleratorsips',
  templateUrl: './acceleratorsips.component.html',
  styleUrls: ['./acceleratorsips.component.css']
})
export class AcceleratorsipsComponent implements OnInit {
// bloburl="https://viewdatainexcel.blob.core.windows.net/testcontainer/Accelerator.xlsx"


jsonvaluesofexcel= {
	"Sheet1": [{
			"Slno": 1,
			"ISU": "CTO",
			"SubscriptioName": "TCS CUBO Marketplace_API Management",
			"AcceleratorIp": "TCS-CUBO (IP)",
			"AccelaratorIPdesc": "Online marketplace for partners to publish their product APIs",
			"Createdon": "07/29/20"
		},
		{
			"Slno": 2,
			"ISU": "CSI",
			"SubscriptioName": "DevSecOps PoC",
			"AcceleratorIp": "DevSec Ops Accelarator",
			"AccelaratorIPdesc": "Hosting web application, containerized web application in Azure App Service",
			"Createdon": "02/18/21"
		},
		{
			"Slno": 3,
			"ISU": "MBU",
			"SubscriptioName": "mbu_dataai-intelligent_data_services_poc",
			"AcceleratorIp": "AI Data Service(IP)",
			"AccelaratorIPdesc": "DataAI intelligent data services",
			"Createdon": "11/24/20"
		},
		{
			"Slno": 4,
			"ISU": "MBU",
			"SubscriptioName": "ABN Amro_Smart Document Capturing System",
			"AcceleratorIp": "DAWIN(IP)",
			"AccelaratorIPdesc": "Document Automation With Intelligence : - Smart Document Capturing System",
			"Createdon": "10/01/20"
		},
		{
			"Slno": 5,
			"ISU": "CTO",
			"SubscriptioName": "TCS CUBO Marketplace_API Management",
			"AcceleratorIp": "TCS-CUBO (Accelarator)",
			"AccelaratorIPdesc": "Online marketplace for partners to publish their Product APIs",
			"Createdon": "07/29/20"
		},
		{
			"Slno": 6,
			"ISU": "MBU",
			"SubscriptioName": "mbu_dataai-intelligent_data_services_poc",
			"AcceleratorIp": "AI Data Service(Accelarator)",
			"AccelaratorIPdesc": "DataAI intelligent data services",
			"Createdon": "11/24/20"
		}
	]
}
  constructor() { }

  ngOnInit(): void {
    console.log(this.jsonvaluesofexcel.Sheet1)
  }

}
