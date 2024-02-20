import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  quantity: number = 0;
  constructor(public loginService: LoginService,
    public itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.cartInfo$.subscribe((cartItems: any) => {
      this.quantity = cartItems.reduce((s: number, item: any) => s += +item.quantity, 0)
    });
  }
}
