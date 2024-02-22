import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  totalResults: any;
  filters: any = [];
  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.itemsData.subscribe((data: any) => {
      if(data) {
        this.totalResults = data.totalResults;
      }
    });
    this.itemService.filters$.subscribe((filters: any) => this.filters = filters);
  }
  remove(i: number) {
    this.filters.splice(i, 1);
    this.itemService.filters$.next(this.filters);
    const companyIds = this.filters.map((company: any) => company.id);
    this.itemService.getItemList(companyIds);
  }

}
