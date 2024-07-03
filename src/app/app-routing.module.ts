import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'adminl', component: AdminListComponent },
      { path: 'adminreg', component: AdminRegComponent },
      { path: 'addproduct', component: AddproductComponent },
    ],
  },
  { path: '**', redirectTo: 'app' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
