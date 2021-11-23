import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustOrderHistory } from '../classes/cust-order-history';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CustOrderHistoryService {

  constructor(private http: HttpClient, private base : BaseService) { }

  getCustOrderHisory( CustomerID : string, startDate : any, EndDate : any) : Observable<Array<CustOrderHistory>>{
     return this.http.get<Array<CustOrderHistory>>(this.base.url + "CustOrderHistory/" + CustomerID + "/" + startDate + "/" + EndDate)
  }
}
