import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceleratorsips',
  templateUrl: './acceleratorsips.component.html',
  styleUrls: ['./acceleratorsips.component.css']
})
export class AcceleratorsipsComponent implements OnInit {
// bloburl="https://viewdatainexcel.blob.core.windows.net/testcontainer/Accelerator.xlsx"


jsonvaluesofexcel={
	"Sheet1": [{
			"Slno": 1,
			"ISU": "CTO",
			"Type": "IP",
			"AcceleratorIp": "TCS CUBO Marketplace_API Management",
			"AccelaratorIPdesc": "TCS CUBO Marketplace API Management is a Online marketplace for partners to publish their Product APIs",
			"OwnerName": "Rajendra Biswal",
			"OwnerEmailId": "rajendra.biswal @tcs.com ",
			"Createdon": "07/29/20"
		},
		{
			"Slno": 2,
			"ISU": "CSI",
			"Type": "Accelarator",
			"AcceleratorIp": "DevSecOps Accelarator(Accelarator)",
			"AccelaratorIPdesc": "Hosting web application,containerized web  application in Azure App Service",
			"OwnerName": "Deepak Kannan Muthuchamy",
			"OwnerEmailId": "deepak.kannan @tcs.com ",
			"Createdon": "02/18/21"
		},
		{
			"Slno": 3,
			"ISU": "MBU",
			"Type": "IP",
			"AcceleratorIp": "DataAI Intelligent Data Services",
			"AccelaratorIPdesc": "DataAI intelligent data services",
			"OwnerName": "Vinit Maind",
			"OwnerEmailId": "vinit.maind @tcs.com ",
			"Createdon": "11/24/20"
		},
		{
			"Slno": 4,
			"ISU": "MBU",
			"Type": "Accelarator",
			"AcceleratorIp": "DAWIN - Smart Document Capturing System",
			"AccelaratorIPdesc": "ABN Amro Smart Document Capturing System is a Document Automation With Intelligence implemented across multiple TCS clients",
			"OwnerName": "Sanal S",
			"OwnerEmailId": "sanal.s @tcs.com ",
			"Createdon": "10/01/20"
		},
		{
			"Slno": 5,
			"ISU": "CTO",
			"Type": "Accelarator",
			"AcceleratorIp": "TCS-CUBO (Accelarator)",
			"AccelaratorIPdesc": "Online marketplace for partners to publish their Product APIs",
			"OwnerName": "Rajendra Biswal",
			"OwnerEmailId": "rajendra.biswal @tcs.com ",
			"Createdon": "07/29/20"
		}
	]
}
  constructor() { }

  ngOnInit(): void {
    console.log(this.jsonvaluesofexcel.Sheet1)
  }

}
