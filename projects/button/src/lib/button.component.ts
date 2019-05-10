import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button>
      Button works!!!
	Marvelous!
Amazing!!
YEah
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
