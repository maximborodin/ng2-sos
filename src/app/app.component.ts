import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <!---<app-contacts></app-contacts> --->
    <nav>
      <a routerLink="/contacts" routerLinkActive="active">Contacts</a>
      <a routerLink="/reference" routerLinkActive="active">Reference</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  title = 'Hello';
}
