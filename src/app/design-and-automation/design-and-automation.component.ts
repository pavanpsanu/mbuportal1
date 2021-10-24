import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-design-and-automation',
  templateUrl: './design-and-automation.component.html',
  styleUrls: ['./design-and-automation.component.css']
})
export class DesignAndAutomationComponent implements OnInit {
  images = [100, 100, 100].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }
  ngOnInit(): void {
  }

}
