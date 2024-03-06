import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { LoginService } from './services/login.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eComApp';
  user: any;
  isLoginPage: boolean = true;
  isCart: boolean = false;
  isItemList: boolean = false;
  isCheckout: boolean = false;
  constructor(public loginService: LoginService,
    private router: Router) {
    setTheme('bs5');
  }

  ngOnInit(): void {
    // this.loginService.user$.subscribe((user: any) => {
    //    this.user = user;
    // });
    this.router.events.subscribe(e => {
      if(e instanceof NavigationStart) {
        this.isLoginPage = e.url.includes('login') || e.url.includes('forgotpwd') || e.url.includes('registration');
        this.isCart = e.url.includes('cart');
        this.loginService.isCheckoutOn = this.isCheckout = e.url.includes('checkout');
        this.isItemList = e.url.includes('itemList');
      }
    });
  }

}
