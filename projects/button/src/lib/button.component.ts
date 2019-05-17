import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button>
      Button works!!!

aa	Marvelous!
Amazing!!
YEah
Great!!!!
ouhh
papapapao
    </button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     console.log("Entra al modulo button");	 
  }

}
