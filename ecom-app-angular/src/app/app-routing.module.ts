import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./ui/customers/customers.component";
import {ProductsComponent} from "./ui/products/products.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path : "products", component : ProductsComponent, canActivate : [AuthGuard], data : {roles :['ADMIN']}},
  {path : "customers", component : CustomersComponent, canActivate : [AuthGuard], data : {roles : ['USER']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
