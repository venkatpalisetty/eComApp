import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewAddressComponent } from '../add-new-address/add-new-address.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  @Output() selectAddress: EventEmitter<any> = new EventEmitter<any>();
  dialogRef: any;
  addressList: any = [];
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
  constructor(public dialog: MatDialog, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.user$.subscribe((user: any) => {
      this.addressList.push(user.address);
    })
  }
  
  openNewAddressPopup() {
    this.dialogRef = this.dialog.open(AddNewAddressComponent, {
      data: {},
    });

    this.dialogRef.afterClosed().subscribe((newAddress: any) => {
       if(newAddress) {
        this.addressList.push(newAddress);
       }
    });
  }
  getCountry(id: any) {
    const selectedCountry = this.countryList.find((country: any) => country.id == id);
    return selectedCountry ? selectedCountry.name : '';
  }

  getState(id: any) {
    const selectedState = this.stateList.find((s: any) => s.id == id);
    return selectedState ? selectedState.name : '';
  }
  goToPayment() {
    this.selectAddress.emit(this.addressList.find((address: any) => address.isDefault));
  }

}
