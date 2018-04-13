import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-databinding',
  templateUrl: './twoway-databinding.component.html',
  styleUrls: ['./twoway-databinding.component.css']
})
export class TwowayDatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  counterValue = 1;
  tab= 2;
  
  firstName = 'Khushboo';
  lastName =  'Damaniya';
  
  name =   this.firstName  + this.lastName ;
  
  currentHero = {
		  name:"Arun"
		  
  }
  condition = true;
  num = 2;
  fontsize = 25;
  clickMe (event){
	  	console.log("Event "+ JSON.stringify(event));
	  alert("Hiii");
	  
  }
  onClick(name){
	  alert("Welcome "+ name);
	  
  }
  heroes = [
            {name:"abc",key:1},
            {name:"abcd",key:4},
            {name:"abcde",key:3}
            
            ]
            		
/*trackByHeroes(index: number, hero: Hero): number { return hero.key; }*/
  callPhone(number){
	  alert("Added num" + number);
	  
  }
  callFax(fax){
	  alert("FAX num "+ fax );
	  
  }
  title2 = "Pipe exam";
}
