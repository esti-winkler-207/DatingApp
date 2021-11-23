import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/data.categories';
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { SortDescriptor } from "@progress/kendo-data-query";
import { ProductService } from "../../product.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  public dropDownItems = categories;
  public defaultItem = { text: "Filter by Category", value: null };
  public gridItems: Observable<GridDataResult>;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = null;

  constructor(private service: ProductService) { 
    this.loadGridItems();
   }

   public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }
  
  private loadGridItems(): void {
    this.gridItems = this.service.getProducts(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }



}
