import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {
  bankList: any = ["Choose an Option","SBI","ICIC","HDFC","AXIS"];
  emiList: any = ["Select EMI options"];
  selectedIndex: number = 0;
  selectedPaymentDetails: any ='';
  @Output() completePayment: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  changeSelection(index: number, paymentDetails: any) {
    this.selectedIndex = index;
    this.selectedPaymentDetails = paymentDetails;
  }

  onPaymentComplete() {
    this.completePayment.emit(this.selectedPaymentDetails);
  }
  
}
 