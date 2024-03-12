import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  selectedIndex: number = 1;
  selectedAddress: any;
  countryList: any = [
    { id: 1, name: 'India'},
    { id: 2, name: 'USA'},
    { id: 3, name: 'UK'},
    { id: 4, name: 'Japan'},
  ];
  stateList: any = [
    { id: 1, name: 'AP'},
    { id: 2, name: 'TG'},
    { id: 3, name: 'UP'},
    { id: 3, name: 'MP'},
  ];

  itemList: any = [];
  quantity: number = 0;
  totalPrice: number = 0;
  quantityList: any = [1, 2, 3, 4, 5];
  totalAmount: number = 0;
  totalOrder:any;
  deleveryCharges: any = 200;
  promotions: any = 200;
  date = new Date();
  constructor(public itemService:ItemService,private route:Router) { }

  ngOnInit(): void {
    this.itemService.cartInfo$.subscribe((cartItems: any) => {
      this.quantity = cartItems.reduce((s: number, item: any) => s += +item.quantity, 0);
      const amount = cartItems.reduce((s: number, item: any) => s += item.price * +item.quantity, 0);
      if(amount > 0) {
        this.totalPrice = amount.toFixed(2);      
        this.totalAmount = (amount + this.deleveryCharges).toFixed(2);
        this.totalOrder = (this.totalAmount - this.promotions).toFixed(2);
      }
    });
  }

  onSelectAddress(address: any) {
    this.selectedIndex = 2;
    this.selectedAddress = address;
  }

  getCountry(id: any) {
    const selectedCountry = this.countryList.find((country: any) => country.id == id);
    return selectedCountry ? selectedCountry.name : '';
  }

  getState(id: any) {
    const selectedState = this.stateList.find((s: any) => s.id == id);
    return selectedState ? selectedState.name : '';
  }

  onChangeOption(index: number) {
    this.selectedIndex = index;
    if(index == 5) {      
      this.itemService.cartInfo$.next([]);
    }
  }

  onCompletePayment() {
    this.selectedIndex = 4;
  }

  
  

 

  onQtyChange(cartIems: any) {
    this.itemService.cartInfo$.next(cartIems);
  }

  onDelete(i: number, cartIems: any) {
    cartIems.splice(i, 1);
    this.itemService.cartInfo$.next(cartIems);
  }

  placeorder(){
    this.route.navigate(['/orderConfirmation']);
  }
}
