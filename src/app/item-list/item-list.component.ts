import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  typeId: string = '';
  quantityList: any = [1, 2, 3, 4, 5];
  itemList: any = [];
  pageSize: number = 10;
  numberOfPages: number = 0;
  pageNumbers: any = [1, 2, 3, 4, 5, 6, 7];
  seletedPage: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.itemsData.subscribe((data: any) => {
      if(data) {
        this.itemList = data.results.map((item: any) => ({...item, quantity: 1}));
        this.numberOfPages = Math.ceil(data.totalResults / this.pageSize);
      }
    });
    this.activatedRoute.params.subscribe((params: any) => {
      this.itemService.typeId = params.typeId;
      this.itemService.filters$.next([]);
      this.getCompanyList();      
      this.getItemList();
    });
  }

  getCompanyList() {
    this.itemService.getCompanyList();
  }

  getItemList() {
    this.itemService.getItemList();
  }

  onSelectPage(i: any) {
    this.seletedPage = i;
  }

  addToCart(item: any) {
    let items: any;
    this.itemService.cartInfo$.subscribe((cartInfo: any) => {
      items = cartInfo;
    }).unsubscribe();
    
    this.itemService.cartInfo$.next([...items, item]);
  }

}
