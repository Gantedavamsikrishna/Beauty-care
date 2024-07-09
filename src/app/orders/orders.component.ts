import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  isList: boolean = true;
  isreg: boolean = false;
  orders: any[] = [];
  orderform: FormGroup;
  constructor(
    private service: AdminService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.orderform = this.fb.group({
      orderid: ['', Validators.required],
      productId: ['', Validators.required],
      pname: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.maxLength(10)]],
      pincode: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      phnumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }
  ngOnInit(): void {
    this.orderform = this.fb.group({
      orderid: ['', Validators.required],
      productId: ['', Validators.required],
      pname: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.maxLength(10)]],
      pincode: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      phnumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });

    this.getorders(this.orders);
  }
  getorders(order: any[]) {
    this.service.getallorders(order).subscribe((res) => {
      console.log('res', order);
      this.orders = order;
    });
  }
  onSubmit() {
    if (this.orderform.valid) {
      const formData = this.orderform.value;
      this.service.createdata(formData).subscribe(
        (response) => {
          console.log('Admin created successfully', response);
          this.orderform.reset();
          this.isList = true;
          this.isreg = false;
          this.getorders(this.orders);
        },
        (error) => {
          console.error('Error creating admin', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  navigateToAdminReg() {
    this.isList = false;
    this.isreg = true;
  }
}
