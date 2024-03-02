import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    CheckoutComponent,
    AddressesComponent,
    AddNewAddressComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule
  ]
})
export class CheckoutModule { }
