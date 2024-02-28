import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemList: any = [];
  quantity: number = 0;
  totalPrice: number = 0;
  quantityList: any = [1, 2, 3, 4, 5];
  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    // this.itemService.cartInfo$.subscribe((data: any) => {
    //   if(data) {
    //     this.itemList = data.results;
    //     // this.numberOfPages = Math.ceil(data.totalResults / this.pageSize);
    //   }
    // })
    this.itemService.cartInfo$.subscribe((cartItems: any) => {
      this.quantity = cartItems.reduce((s: number, item: any) => s += +item.quantity, 0);
      this.totalPrice = cartItems.reduce((s: number, item: any) => s += item.price * item.quantity, 0).toFixed(2);
    });
  }

  onQtyChange(cartIems: any) {
    this.itemService.cartInfo$.next(cartIems);
  }

  onDelete(i: number, cartIems: any) {
    cartIems.splice(i, 1);
    this.itemService.cartInfo$.next(cartIems);
  }

}
