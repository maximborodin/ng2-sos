/**
 * Created by Maxim on 5/12/2017.
 */

import { ContactsComponent } from './contacts/contacts.component';
import { ReferenceComponent } from './reference/reference.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const router: Routes = [
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full' },
  { path: 'reference', component: ReferenceComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
