import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../services/item.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  typeId: string = '';
  quantityList: any = [1, 2, 3, 4, 5];
  itemList: any = [];
  pageSize: number = 5;
  numberOfPages: number = 0;
  pageNumbers: any = [];
  seletedPage: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.itemService.itemsData.subscribe((data: any) => {
      if(data) {
        this.itemList = data.results.map((item: any) => ({...item, quantity: 1}));
        this.numberOfPages = Math.ceil(data.totalResults / this.pageSize);
        this.pageNumbers = [];
        for(let i = 0; i < this.numberOfPages; i++) {
          this.pageNumbers.push(i+1);
        }
      }
    });
    this.activatedRoute.params.subscribe((params: any) => {
      this.itemService.typeId = params.typeId;
      this.itemService.filters$.next([]);
      this.seletedPage = 1;
      this.setPaginationInfo();
      this.getCompanyList();      
      this.getItemList();
    });
  }

  getCompanyList() {
    this.itemService.getCompanyList();
  }

  setPaginationInfo() {
    const data: any = {
      pageSize: this.pageSize,
      seletedPage: this.seletedPage
    };
    this.itemService.paginationData$.next(data);
  }

  getItemList() {
    this.itemService.getItemList();
  }

  onSelectPage(i: any) {
    this.seletedPage = i;
    this.setPaginationInfo();
    let companyIds: any = [];
    this.itemService.filters$.subscribe((companyList: any) => {
      companyIds = companyList.map((company: any) => company.id);
    }).unsubscribe();
    this.itemService.getItemList(companyIds);
  }

  addToCart(item: any, event: any) {
    let items: any;
    this.itemService.cartInfo$.subscribe((cartInfo: any) => {
      items = cartInfo;
    }).unsubscribe();
    
    this.itemService.cartInfo$.next([...items, item]);
    event.stopPropagation();
  }

  onProceedToBuy(item: any, event: any) {
    this.addToCart(item, event);
    this.loginService.user$.subscribe((user) => {
      if(user) {
        this.router.navigate(['/checkout']);
      } else {
        this.loginService.isCheckoutOn = true;
        this.router.navigate(['/login']);
      }
    });
  }

  goToDetails(itemId: any) {
    this.router.navigate(['itemDetails', itemId]);
  }

}
