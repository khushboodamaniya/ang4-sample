import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-twoway-databinding',
  templateUrl: './custom-twoway-databinding.component.html',
  styleUrls: ['./custom-twoway-databinding.component.css']
})
export class CustomTwowayDatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  counterValue = 0;
  @Output() counterChange = new EventEmitter();
  
  @Input()
  get counter() {
    return this.counterValue;
  }

  set counter(value) {
	  console.log(value +"in set");
    this.counterValue = value;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++
  }
}
