import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  totalResults: any;
  filters: any = ['filter1', 'filter2'];
  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.itemsData.subscribe((data: any) => {
      if(data) {
        this.totalResults = data.totalResults;
      }
    })
  }
  remove(i: number) {
    this.filters.splice(i, 1);
  }

}
