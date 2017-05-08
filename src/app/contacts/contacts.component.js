"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Maxim on 5/7/2017.
 */
var core_1 = require("@angular/core");
var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.contacts = [
            { 'id': 11, 'phone': '01', 'name': 'Fire engine' },
            { 'id': 12, 'phone': '02', 'name': 'Police' },
            { 'id': 13, 'phone': '03', 'name': 'Ambulance' },
            { 'id': 14, 'phone': '04', 'name': 'Emergency gas service' },
            { 'id': 15, 'phone': '05', 'name': 'Dispatching service ' },
            { 'id': 16, 'phone': '112', 'name': 'Emergency help' }
        ];
    };
    ContactsComponent.prototype.onSelect = function (contact) {
        this.selectedContact = contact;
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'toh-contacts',
        templateUrl: 'contacts.component.html',
        styleUrls: ['contacts.component.css'],
    }),
    __metadata("design:paramtypes", [])
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map