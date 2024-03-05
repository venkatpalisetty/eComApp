import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

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
  constructor(private itemService: ItemService) { }

  ngOnInit(): void { 
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
  }

  onCompletePayment() {
    this.selectedIndex = 4;
    this.itemService.cartInfo$.next([]);
  }

}
