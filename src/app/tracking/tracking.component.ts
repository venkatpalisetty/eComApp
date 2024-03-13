import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  isLinear = false;
  constructor(public itemService:ItemService) { }

  ngOnInit(): void {
  }

}
