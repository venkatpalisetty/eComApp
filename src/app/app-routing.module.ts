import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { OrderConfirmationComponent } from './checkout/order-confirmation/order-confirmation.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { TrackingComponent } from './tracking/tracking.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'forgotpwd', component: ForgotpwdComponent, title: 'Forgot Password'},
  {path: 'registration', component: RegistrationComponent, title: 'New User'},
  {path: 'cart', component: CartComponent, title: 'cart'},
  {path: 'checkout', component: CheckoutComponent, title: 'checkout'},
  {path: 'orderConfirmation', component: OrderConfirmationComponent, title: 'orderConfirmation'},
  {path: 'account', component: AccountComponent, title: 'account'},
  {path: 'orders', component: OrdersComponent, title: 'orders'},
  {path: 'orderDetails/:id', component: OrderDetailsComponent, title: 'orderDetails'},
  {path: 'tracking', component: TrackingComponent, title: 'track'},
  {path: 'cancelOrder', component: CancelOrderComponent, title: 'cancelOrder'},
  {path: 'itemList/:typeId', component: ItemListComponent, title: 'Item List'},
  {path: 'itemDetails/:id', component: ItemDetailComponent, title: 'itemDetail'},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
