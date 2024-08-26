import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-orderproduct',
  templateUrl: './orderproduct.component.html',
  styleUrls: ['./orderproduct.component.css'],
})
export class OrderproductComponent {
  product: any;
  quantity!: number;
  isdesc: boolean = true;
  isreview: boolean = true;
  productId!: string;
  orderform: any;
  isform: boolean = false;
  showSuccess: boolean = true;
  constructor(
    private qutservice: QuantityService,
    private service: AdminService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.orderform = this.fb.group({
      orderid: ['', Validators.required],
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
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.getproductbyid(this.productId);
    });
    this.qutservice.currentQuantity.subscribe((quantity) => {
      this.quantity = quantity;
    });
  }

  onSubmit() {
    if (this.orderform.valid) {
      const orderData = {
        ...this.orderform.value,
        productId: this.productId,
        quantity: this.quantity,
      };

      this.service.createorder(orderData).subscribe(
        (res) => {
          this.showSuccess = true;
          this.isform = false;
          console.log(res, 'successfully ordered');
          setTimeout(() => {
            this.showSuccess = false;
          }, 3000);
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
