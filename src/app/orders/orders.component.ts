import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  currentDate = new Date();
  constructor(public itemService:ItemService,private route:Router) { }

  ngOnInit(): void {
  }
  editOrder(){
    this.route.navigate(['/orderDetails']);
  }
  tracking(){
    this.route.navigate(['/tracking']);
  }
}
