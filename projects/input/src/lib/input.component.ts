import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input',
  template: `
    <div>
      Input funciona!
    </div>
  `,
  styles: []
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   console.log("Entra en el modulo input");
  }

}
