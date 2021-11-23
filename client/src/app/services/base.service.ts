import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url = "https://localhost:5001/api/";
  constructor() { }
}
