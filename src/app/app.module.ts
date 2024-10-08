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
import { LoginComponent } from './login/login.component';
import { ApistestComponent } from './apistest/apistest.component';
import { GellaryComponent } from './gellary/gellary.component';
import { NewstoreComponent } from './newstore/newstore.component';
import { Home1Component } from './home1/home1.component';
import { OrderproductComponent } from './orderproduct/orderproduct.component';
import { BlogComponent } from './blog/blog.component';

import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    AdminRegComponent,
    AdminListComponent,
    ProductsComponent,
    DashboardComponent,
    UserComponent,
    NavbarComponent,
    UserProductsComponent,
    ProductdetailsComponent,
    HomepageComponent,
    FooterComponent,
    CardsComponent,
    AboutComponent,
    LoginComponent,
    ApistestComponent,
    GellaryComponent,
    NewstoreComponent,
    Home1Component,
    OrderproductComponent,
    BlogComponent,
    CartComponent,
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
