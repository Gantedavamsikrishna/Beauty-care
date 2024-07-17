import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';

import { AdminService } from './admin.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';

import { UserProductsComponent } from './user-products/user-products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    AdminRegComponent,
    AdminListComponent,
    AddproductComponent,
    DashboardComponent,
    UserComponent,
    NavbarComponent,
    UserProductsComponent,
    ProductdetailsComponent,
    HomepageComponent,
    FooterComponent,
    CardsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AdminService],
  bootstrap: [AppComponent],
})
export class AppModule {}
