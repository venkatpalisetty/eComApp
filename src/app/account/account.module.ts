import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { OrdersComponent } from '../orders/orders.component';


@NgModule({
  declarations: [
    AccountComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule
  ]
})
export class AccountModule { }
