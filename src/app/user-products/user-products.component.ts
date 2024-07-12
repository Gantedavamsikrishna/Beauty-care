import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css'],
})
export class UserProductsComponent implements OnInit {
  shopnow(productid: any) {
    this.roter.navigate(['/get', productid]);
  }
  products: any;

  constructor(private service: AdminService, private roter: Router) {}
  ngOnInit(): void {
    this.getallprdata(this.products);
  }

  getallprdata(data: any[]) {
    this.service.getallprdata(data).subscribe(
      (res) => {
        console.log(res, 'data');
        this.products = res;
        this.products.forEach(
          (product: { imageUrl: string; productid: any }) => {
            product.imageUrl = this.service.getImageUrl(product.productid);
          }
        );
      },

      (err) => {
        console.log(err);
      }
    );
  }
}
