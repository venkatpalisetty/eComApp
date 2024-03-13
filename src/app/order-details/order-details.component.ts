import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  currentDate = new Date();
  quantity: number = 0;
  totalPrice: number = 0;
  totalAmount: number = 0;
  totalOrder:any;
  shipping: any = 40;
  
  constructor(public itemService: ItemService,private route:Router) { }

  ngOnInit(): void {
    this.itemService.cartInfo$.subscribe((cartItems: any) => {
      this.quantity = cartItems.reduce((s: number, item: any) => s += +item.quantity, 0);
      const amount = cartItems.reduce((s: number, item: any) => s += item.price * +item.quantity, 0);
      if(amount > 0) {
        this.totalPrice = amount.toFixed(2);      
        this.totalAmount = (amount + this.shipping).toFixed(2);
      }
    });
  }

  cancelorder(){
    this.route.navigate(['/cancelOrder']);
  }
}
