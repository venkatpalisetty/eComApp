import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderList:any = [];
  constructor(private activtedroute:ActivatedRoute,public orderService:OrderService,private route:Router) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe((data:any) => {
      this.orderList = data;
      console.log(this.orderList);
  })
  }
  editOrder(){
    this.route.navigate(['/orderDetails']);
  }
  tracking(){
    this.route.navigate(['/tracking']);
  }
}
