import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <!---<app-contacts></app-contacts> --->
    <div>
      <button routerLink="/contacts" routerLinkActive="active">Contacts</button>
      <button routerLink="/reference" routerLinkActive="active">Reference</button>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  title = 'Hello';
}
