import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  itemList: any = [];
  numbers: any = ['1','2','3','4','5'];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.itemsData.subscribe((data: any) => {
      if(data) {
        this.itemList = data.results;
        // this.numberOfPages = Math.ceil(data.totalResults / this.pageSize);
      }
    })
  }

}
