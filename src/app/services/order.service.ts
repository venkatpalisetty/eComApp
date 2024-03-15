import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  constructor() { }

  
  orders: any = [
    {
      id: 1, date: new Date(), shippingAddress: [{ name: 'Harshi', address1: 'H.No: 123', address2: 'New Police station', city: 'Piduguralla', state: 'AP', country: 'India', pin: 522413 }],
      items: [
        { id: 1, name: 'Item1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1 },
        { id: 2, name: 'Item2', desc: 'Item 2', price: '100.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1 }
      ]
    },
    {
      id: 2, date: new Date(), shippingAddress: [{ name: 'Karishma', address1: 'H.No: 123', address2: 'New Police station', city: 'Piduguralla', state: 'AP', country: 'India', pin: 522413 }],
      items: [
        { id: 1, name: 'Item1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1 },
        { id: 2, name: 'Item2', desc: 'Item 2', price: '90.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1 }
      ]
    },
    // { id: 40643716274309160, date: new Date(), shippingAddress: [{ name: 'Karishma', address1: 'H.No: 123', address2: 'New Police station', city: 'Piduguralla', state: 'AP', country: 'India', pin: 522413 }], items: [{ id: 1, name: 'Ttem1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1 }]},
    // { id: 40643716274309160, date: new Date(), shippingAddress: [{ name: 'Raji', address1: 'H.No: 123', address2: 'New Police station', city: 'Piduguralla', state: 'AP', country: 'India', pin: 522413 }], items: [{ id: 1, name: 'Ttem1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1 }]},
    // { id: 40643716274309160, date: new Date(), shippingAddress: [{ name: 'Samarajyam', address1: 'H.No: 123', address2: 'New Police station', city: 'Piduguralla', state: 'AP', country: 'India', pin: 522413 }], items: [{ id: 1, name: 'Ttem1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1 }]},
  ]

  getOrder(): Observable<any> {
    return of(this.orders);
  };

  getOrderItem(id: any) {
    return this.orders.find((item: any) => item.id == id);
  }
}
