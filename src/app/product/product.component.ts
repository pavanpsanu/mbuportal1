import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }
  assessment(){
   
    this.router.navigate(['assessment'])
 
  }
  migrationfactory(){
   this.router.navigate(['migration-factory'])
  }
  design(){
   this.router.navigate(['design-and-automation'])
  }
  ngOnInit(): void {
  }

}
