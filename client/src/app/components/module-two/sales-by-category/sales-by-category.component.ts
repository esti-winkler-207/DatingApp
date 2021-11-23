import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustOrderHistory } from 'src/app/classes/cust-order-history';
import { SalesByCategoryService } from 'src/app/services/sales-by-category.service';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.css']
})
export class SalesByCategoryComponent {
  public form : FormGroup;
  public categoryName : string = "";
  public ordYear : string = "";
  public result  = new Array<CustOrderHistory>()
  
  constructor(private salesByCategoryServ : SalesByCategoryService) { 
    this.form = new FormGroup({
      categoryName : new FormControl(this.categoryName, [Validators.required]),
      ordYear : new FormControl(this.ordYear, [Validators.required])
    })
  }

  getSalesByCategory(){
    this.salesByCategoryServ.getSalesByCategory(this.categoryName, this.ordYear).subscribe(res =>{
      //console.log(res);
      this.result = res
    })
  }

  ngAfterViewInit(): void{
    this.form.reset();
  }

}
