import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  quantityList: any = [1, 2, 3, 4, 5];
  item: any = [];
  constructor(private activtedroute:ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.activtedroute.params.subscribe((params) => {
      if(params['id']){
        this.item = this.itemService.getItem(params['id']);
      }
    })
  }
  
  addToCart(item: any) {
    let items: any;
    this.itemService.cartInfo$.subscribe((cartInfo: any) => {
      items = cartInfo;
    }).unsubscribe();
    
    this.itemService.cartInfo$.next([...items, item]);
  }


 

}
