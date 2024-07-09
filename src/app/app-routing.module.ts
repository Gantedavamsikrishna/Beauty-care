import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserProductsComponent } from './user-products/user-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'userpr', component: UserProductsComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        children: [{ path: 'addproduct', component: AddproductComponent }],
      },
      {
        path: 'adminl',
        component: AdminListComponent,
        children: [{ path: 'adminreg', component: AdminRegComponent }],
      },
      { path: 'users', component: UserComponent },
      { path: 'orders', component: OrdersComponent },
    ],
  },

  { path: '**', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
