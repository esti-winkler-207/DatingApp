import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../classes/customers';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  

  constructor(public http : HttpClient, public baseUrl : BaseService) { }

  getCustomersByFields(customer : Customers): Observable<Customers>{
    
      return  this.http.get<Customers>(
      this.baseUrl.url+"Customers/"+
      customer.contactName+"/"
      +customer.address+"/"
      +customer.city+"/"+
      customer.phone);

  

  }
}
