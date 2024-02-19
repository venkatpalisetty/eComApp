import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  paginationData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }

  getItemList(typeId: string, companyIds?: string) {
    const data ={
      results: [
      {id: 1, name: 'Ttem1', desc: 'Item 1', price: '20.00', typeId: 1, imgUrl: 'item1'},
      {id: 2, name: 'Ttem2', desc: 'Item 2', price: '30.00', typeId: 1, imgUrl: 'item2'},
    ],
    totalResults: 100};
    this.itemsData.next(data);
  }

  getCompanyList(typeId: string) {
    return of([
      {id: 1, name: 'Company 1', desc: 'Company 1', price: '20.00', typeId: 1},
      {id: 2, name: 'Company 2', desc: 'Company 2', price: '30.00', typeId: 1},
    ]);
  }
}
