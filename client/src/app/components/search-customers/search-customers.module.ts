import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCustomersComponent } from './search-customers.component';

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SearchCustomersGridComponent } from './search-customers-grid/search-customers-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [SearchCustomersComponent, SearchCustomersGridComponent],
  exports:[
    SearchCustomersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    LabelModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    DropDownsModule,
    DateInputsModule,
    GridModule
  ]


 
})
export class SearchCustomersModule { }
