import { Component, Input, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { CustOrderHistory } from 'src/app/classes/cust-order-history';

@Component({
  selector: 'app-cust-order-history-grid',
  templateUrl: './cust-order-history-grid.component.html',
  styleUrls: ['./cust-order-history-grid.component.css']
})
export class CustOrderHistoryGridComponent implements OnInit {
  @Input() result = new Array<CustOrderHistory>(); 
  isResEmpty : boolean = true;
  pageSize = 6;
  skip = 0;
  @Input() isNotSales : boolean;
  constructor() {
    
   }

  public gridView: GridDataResult;
 

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  ngOnInit(): void {
    if(this.result.length == 0)
    {
       this.isResEmpty = true;
    }
    else { 
      this.isResEmpty = false
       console.log(this.result)
       this.loadItems();
      
    }
  }

  private loadItems(): void {
    this.gridView = {
      data: this.result.slice(this.skip, this.skip + this.pageSize),
      total: this.result.length,
    };
  }

}
