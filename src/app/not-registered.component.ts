import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-registered',
  template: `
    <h1>
     Usuario no registrado
    </h1>
  `,
  styles: [
  ]
})
export class NotRegisteredComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
