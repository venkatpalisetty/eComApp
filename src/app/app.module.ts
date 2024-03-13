import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SummaryComponent } from './summary/summary.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { CheckoutModule } from './checkout/checkout.module';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { AccountModule } from './account/account.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { TrackingComponent } from './tracking/tracking.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ItemListComponent,
    ToolbarComponent,
    SummaryComponent,
    ForgotpwdComponent,
    RegistrationComponent,
    CartComponent,
    ItemDetailComponent,
    OrderDetailsComponent,
    TrackingComponent,
    CancelOrderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    LoginModule,
    SidenavModule,
    CommonModule,
    FormsModule,
    MatChipsModule,
    MatSelectModule,
    CheckoutModule,
    AccountModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
