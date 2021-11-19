import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceleratorsips',
  templateUrl: './acceleratorsips.component.html',
  styleUrls: ['./acceleratorsips.component.css']
})
export class AcceleratorsipsComponent implements OnInit {
bloburl="https://viewdatainexcel.blob.core.windows.net/testcontainer/Accelerator.xlsx"
  constructor() { }

  ngOnInit(): void {
  }

}
