import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Andrei's Angular Playground";
  aString = "I am just a random String";
  aNumber = 100;
  aText = "A simple text inside the paragraph"
  vBorder = false;
  vBackColor = "green";

  constructor(){
  	setTimeout(() => {
  		this.aNumber += 200;
  		this.aText = "we changed the text";
  		this.vBorder = true;
  		this.vBackColor = "red"; 
  	},3500);
  }
}
