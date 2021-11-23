import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustOrderHistory } from '../classes/cust-order-history';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SalesByCategoryService {

  constructor(private http : HttpClient , private base : BaseService) { }

  getSalesByCategory(CategoryName : string, OrdYear: string) : Observable<Array<CustOrderHistory>>{
    return this.http.get<Array<CustOrderHistory>>(this.base.url 
    + "SalesByCategory/" +
    CategoryName + "/" + OrdYear);
  }
}
