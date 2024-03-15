import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

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
  orderItem:any = [];
  
  constructor(private activtedroute:ActivatedRoute,public orderService:OrderService,private route:Router, private itemService:ItemService) { }

  ngOnInit(): void {
    this.activtedroute.params.subscribe((params) => {
      if(params['id']){
        this.orderItem = this.orderService.getOrderItem(params['id']);
        console.log(this.orderItem);
      }
    })

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
