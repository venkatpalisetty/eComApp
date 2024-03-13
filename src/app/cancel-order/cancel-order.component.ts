import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.scss']
})
export class CancelOrderComponent implements OnInit {

  reasonsforcancellation: any = [
    "Select Cancellation Reason",
    "Order Created by Mistake",
    "Item(s) Would Not Arrive on Time",
    "Shipping Cost Too High",
    "Item Price Too High",
    "Found Cheaper Somewhere Else",
    "Need to Change Shipping Address",
    "Need to Change Shipping Speed",
    "Need to Change Billing Address",
    "Need to Change Payment Method",
    "Other"
  ];

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
  }

}
