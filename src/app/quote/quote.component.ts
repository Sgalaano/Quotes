import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Where there is will there is way','Kazungu.F','Galaano', new Date)
  ]
addQuote(newQuote){
  this.quotes.push(newQuote)
}

delQuote(i){
  this.quotes.splice(i,1)
}
  constructor() { }

  ngOnInit() {
  }

}
