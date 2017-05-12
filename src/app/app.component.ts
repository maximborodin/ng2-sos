import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `    
    <!---<app-contacts></app-contacts> --->
    <div>
      <button routerLink="/contacts" routerLinkActive="active">Contacts</button>
      <button routerLink="/reference" routerLinkActive="active">Reference</button>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
}
