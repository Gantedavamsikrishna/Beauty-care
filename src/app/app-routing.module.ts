import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'adminl', component: AdminListComponent },
  { path: 'adminreg', component: AdminRegComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/products' }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
