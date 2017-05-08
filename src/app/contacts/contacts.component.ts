/**
 * Created by Maxim on 5/7/2017.
 */
import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.model';

@Component({
  moduleId: module.id,
  selector: 'toh-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;
  constructor() {  }

  ngOnInit() {
    this.contacts = [
      {'id': 11, 'phone': '01', 'name': 'Fire engine'},
      {'id': 12, 'phone': '02', 'name': 'Police'},
      {'id': 13, 'phone': '03', 'name': 'Ambulance'},
      {'id': 14, 'phone': '04', 'name': 'Emergency gas service'},
      {'id': 15, 'phone': '05', 'name': 'Dispatching service '},
      {'id': 16, 'phone': '112', 'name': 'Emergency help'}
    ];
  }

  onSelect(contact: Contact) {
    this.selectedContact = contact;
  }
}
