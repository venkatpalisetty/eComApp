import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  companyList: any = [];
  typeId: string = '';
  constructor(private activatedRoute: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
  this.getCompanyList();
  }

  getCompanyList() {
    this.itemService.companies$.subscribe((companies) => {      
      this.companyList = companies;
      console.log(this.companyList)
    });
  }

  selectionChange(data: any) {
    const selCompanies = data.map((item: any) => item.value);
    this.itemService.filters$.next(selCompanies);
    const companyIds = selCompanies.map((company: any) => company.id);
    this.itemService.getItemList(companyIds);
  }

}
