import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientModule  } from '@angular/common/http';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

 httpOptions = {
        headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json'
        })
      };

    url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    jsonforquotes:any
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor(private http: HttpClient) { }

    ngOnInit() {

        this.http.get(this.url,this.httpOptions).subscribe((response) => {
            this.jsonforquotes = response;
            console.log(this.jsonforquotes)
           })
      
    }
}
