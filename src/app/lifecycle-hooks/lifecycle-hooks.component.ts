import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  this.nginitfunction();
  }
  nginitfunction(){
	  console.log("ngOnInit");
	  
  }
  ngOnDestroy() {
	    console.log('Component Destroy');
	  }
}
