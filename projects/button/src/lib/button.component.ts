import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button>
      Button works!!!
	Marvelous!
Amazing!!
YEah
Great!!!!
ouhh
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
