import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <toh-contacts></toh-contacts>
  `,
})
export class AppComponent  {
  title = 'Hello Maxim';
}
