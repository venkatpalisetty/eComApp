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
  constructor(public itemService: ItemService,
    private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.itemService.cartInfo$.subscribe((cartItems: any) => {
      this.quantity = cartItems.reduce((s: number, item: any) => s += +item.quantity, 0);
      this.totalPrice = cartItems.reduce((s: number, item: any) => s += item.price * +item.quantity, 0);
    });
  }
  onProceedToBuy() {
    this.loginService.user$.subscribe((user) => {
      if(user) {

      } else {
        this.router.navigate(['/login']);
      }
    })
  }

}
