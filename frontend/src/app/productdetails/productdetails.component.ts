import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuantityService } from '../quantity.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  readdata: any;
  shopnow(productid: any) {
    this.router.navigate(['order/id', productid]);
  }
  addToBag(product: any) {
    this.cartservice.addcart(product);
    console.log('product added cart', product);
  }
  product: any;
  quantity!: number;

  constructor(
    private cartservice: CartService,
    private qtservice: QuantityService,
    private service: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.quantity = this.qtservice.getQuantity();
  }
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
  increment() {
    this.quantity++;
    this.qtservice.updateQuantity(this.quantity);
  }
  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
      this.qtservice.updateQuantity(this.quantity);
    }
  }
}
