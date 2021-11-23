import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustOrderHistoryComponent } from './components/module-two/cust-order-history/cust-order-history.component';
import { SalesByCategoryComponent } from './components/module-two/sales-by-category/sales-by-category.component';
import { SearchCustomersComponent } from './components/search-customers/search-customers.component';
import { UsersComponent } from './components/users/users.component';

const routes = [
  {path: '', component:SearchCustomersComponent, text: 'home' },
  {path: 'searchCustomers', component:SearchCustomersComponent, text: 'search Customers'},
  {path : 'custOrderHistory', component:CustOrderHistoryComponent, text: 'cust Order History'},
  {path : 'salesByCategory', component:SalesByCategoryComponent, text: 'sales By Category'},
  {path : 'users', component:UsersComponent, text: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
