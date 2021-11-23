import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustOrderHistoryService } from 'src/app/services/cust-order-history.service';
import { compareAsc, format } from 'date-fns'
import { CustOrderHistory } from 'src/app/classes/cust-order-history';
@Component({
  selector: 'app-cust-order-history',
  templateUrl: './cust-order-history.component.html',
  styleUrls: ['./cust-order-history.component.css']
})
export class CustOrderHistoryComponent {
  public form: FormGroup;
  public customerID : string = "";
  public startDate: Date = new Date();
  public endDate: Date = new Date();
  public value: Date = new Date();
  public result : Array<CustOrderHistory> = new Array<CustOrderHistory>();
 
  constructor(private custOrderHistServ : CustOrderHistoryService) { 
    this.form = new FormGroup({
    customerid: new FormControl(this.customerID, [Validators.required]),
    startDate: new FormControl(this.startDate, [Validators.required]),
    endDate: new FormControl(this.endDate, [Validators.required])
    });
   }

   ngAfterViewInit(): void{
    this.form.reset();
  }

  getCustOrderHisory(){
      var sd = format(this.startDate, 'yyyy-MM-dd')
      var ed = format(this.endDate, 'yyyy-MM-dd')
      this.custOrderHistServ.getCustOrderHisory(this.customerID, sd, ed)
      .subscribe(res =>{ 
        console.log(res)
        this.result = res;
      })
  }

}
