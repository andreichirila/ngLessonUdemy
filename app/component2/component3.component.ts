import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  template: `
    <p>
      component3 Works!
    </p>
    <ng-content></ng-content>
  `,
  styles: []
})
export class Component3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
