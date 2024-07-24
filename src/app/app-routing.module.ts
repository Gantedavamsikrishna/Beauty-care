import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'products', component: UserProductsComponent },
  { path: 'product-details', component: ProductdetailsComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'get/:id', component: ProductdetailsComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },

      {
        path: 'adminlist',
        component: AdminListComponent,
        children: [{ path: 'adminreg', component: AdminRegComponent }],
      },
      { path: 'users-list', component: UserComponent },
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
