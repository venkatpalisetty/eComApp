import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public itemService:ItemService) { }

  ngOnInit(): void {
  }

}
