import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  constructor(public itemService:ItemService,private route:Router) { }

  ngOnInit(): void {
  }
orders(){
    this.route.navigate(['/account']);
  }
}
