import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  
  constructor(public http : HttpClient,public baseUrl : BaseService ) { }

  getAllCities() : Observable<Array<string>>{
     return this.http.get<Array<string>>(this.baseUrl.url+"Cities")
  }
}
