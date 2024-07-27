import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  readdata: any;
  shopNow() {
    throw new Error('Method not implemented.');
  }
  addToBag() {
    throw new Error('Method not implemented.');
  }
  product: any;
  quantity: number = 1;

  constructor(private service: AdminService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      this.getproductbyid(productId);
    });
  }
  getproductbyid(productId: any[]) {
    this.service.getproductbyid(productId).subscribe(
      (res) => {
        console.log(res, 'data');
        this.product = res;

        this.product.imageUrl = this.service.getImageUrl(
          this.product.productid
        );
      },

      (err) => {
        console.log(err);
      }
    );
  }
}
