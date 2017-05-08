/**
 * Created by Maxim on 5/8/2017.
 */

import  { Component, Input } from '@angular/core';

import  { Contact } from './contact.model';

@Component({
  moduleId: module.id,
  selector: 'toh-contact',
  templateUrl: 'contact.component.html'
})
export class ContactComponent {
  @Input() contact: Contact;
}
