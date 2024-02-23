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
  selectedSort: any = null;
  sortOptions: any = [
    {id: 1, name: 'Sory by: price Low to High', key: 'price', isAsc: true},
    {id: 2, name: 'Sory by: price High to Low', key: 'price', isAsc: false},
    {id: 3, name: 'Sory by: New Arrivals', key: 'creationDate', isAsc: false},
  ]
  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.selectedSort = this.sortOptions[0].id;
    this.itemService.sortOption = this.sortOptions[0];
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

  onSort(data: any) {
    console.log(data);
    this.itemService.sortOption = this.sortOptions.find((option: any) => option.id == this.selectedSort);
    this.itemService.getItemList();
  }

}
