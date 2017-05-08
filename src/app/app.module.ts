import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ContactsComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
