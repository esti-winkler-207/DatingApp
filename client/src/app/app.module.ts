import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ProductService } from './product.service';

import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SearchCustomersModule } from './components/search-customers/search-customers.module';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ModuleTwoModule } from './components/module-two/module-two.module';
import { MenuModule } from '@progress/kendo-angular-menu';
import { UsersComponent } from './components/users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DropDownsModule,
    BrowserAnimationsModule,
    GridModule,
    IconsModule,
    LayoutModule,
    SearchCustomersModule,
    DateInputsModule,
    ModuleTwoModule,
    MenuModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
