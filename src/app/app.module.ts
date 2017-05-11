import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact.component';
import { ReferenceComponent } from './reference/reference.component';
import { routes } from './app.routes';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    routes
  ],
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactComponent,
    ReferenceComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
