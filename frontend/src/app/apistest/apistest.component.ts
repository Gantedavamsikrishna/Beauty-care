import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apistest',
  templateUrl: './apistest.component.html',
  styleUrls: ['./apistest.component.css'],
})
export class ApistestComponent implements OnInit {
  product: any;
  quantity: number = 2;
  isdesc: boolean = true;
  isreview: boolean = true;

  orderform: any;
  constructor(
    private service: AdminService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.orderform = this.fb.group({
      orderid: ['', Validators.required],
      productId: ['', Validators.required],
      fullname: ['', Validators.required],
      pincode: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^[0-9]{6}$'),
        ],
      ],
      phnumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      this.getproductbyid(productId);
    });
  }

  onSubmit() {
    if (this.orderform.valid) {
      this.service.createorder(this.orderform.value).subscribe(
        (res) => {
          console.log(res, 'successfully ordered');
        },
        (error) => {
          console.error('order failed', error);
        }
      );
    }
  }

  getproductbyid(productid: any) {
    this.service.getproductbyid(productid).subscribe((res) => {
      console.log(res, 'data');
      this.product = res;
      this.product.imageUrl = this.service.getImageUrl(this.product.productid);
    });
  }
}
