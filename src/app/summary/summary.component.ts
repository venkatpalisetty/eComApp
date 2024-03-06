import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  quantity: number = 0;
  totalPrice: number = 0;
  totalAmount: number = 0;
  totalOrder:any;
  deleveryCharges: any = 200;
  promotions: any = 200;
  constructor(public itemService: ItemService,
    public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.itemService.cartInfo$.subscribe((cartItems: any) => {
      this.quantity = cartItems.reduce((s: number, item: any) => s += +item.quantity, 0);
      const amount = cartItems.reduce((s: number, item: any) => s += item.price * +item.quantity, 0);
      if(amount > 0) {
        this.totalPrice = amount.toFixed(2);      
        this.totalAmount = (amount + this.deleveryCharges).toFixed(2);
        this.totalOrder = (this.totalAmount - this.promotions).toFixed(2);
      }
    });
  }
  onProceedToBuy() {
    this.loginService.user$.subscribe((user) => {
      if(user) {
        this.router.navigate(['/checkout']);
      } else {
        this.loginService.isCheckoutOn = true;
        this.router.navigate(['/login']);
      }
    })
  }

}
