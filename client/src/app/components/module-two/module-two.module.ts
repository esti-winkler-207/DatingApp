import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustOrderHistoryComponent } from './cust-order-history/cust-order-history.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LabelModule } from "@progress/kendo-angular-label";
import { CustOrderHistoryGridComponent } from './cust-order-history-grid/cust-order-history-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
@NgModule({
  declarations: [
    CustOrderHistoryComponent,
    SalesByCategoryComponent,
    CustOrderHistoryGridComponent,
 
  ],
  exports:[
    CustOrderHistoryComponent,
    SalesByCategoryComponent
  ],
  imports: [
    CommonModule,
    DateInputsModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LabelModule,
    GridModule
  ]
 
})
export class ModuleTwoModule { }
