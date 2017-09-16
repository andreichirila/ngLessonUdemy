import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-propbinding',
  template: `
    <p>
      {{ myName }}
    </p>
  `,
  styles: []
})
export class PropbindingComponent{
  
  @Input() myName: string;

  constructor() { }


}
