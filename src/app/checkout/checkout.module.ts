import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    CheckoutComponent,
    AddressesComponent,
    AddNewAddressComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forChild()
  ]
})
export class CheckoutModule { }
