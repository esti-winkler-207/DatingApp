import { Component, Input, OnInit } from '@angular/core';
import { Customers } from 'src/app/classes/customers';
import { DataBindingDirective } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-search-customers-grid',
  templateUrl: './search-customers-grid.component.html',
  styleUrls: ['./search-customers-grid.component.css']
})
export class SearchCustomersGridComponent implements OnInit {

  public pageSize: number = 10;
  public skip: number = 0;
  gridView : any;

  searchGrid : Customers[] = new Array<Customers>()

  constructor() { }

  ngOnInit(): void {
    this.searchGrid[0] = this.searchResult;
    console.log(this.searchGrid);
   this.gridView = this.searchResult;
  }

  @Input() searchResult = new Customers(); 

}
