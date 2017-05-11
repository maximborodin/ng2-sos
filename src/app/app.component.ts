import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <app-contacts></app-contacts>
  `,
})
export class AppComponent  {
  title = 'Hello';
}
