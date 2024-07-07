import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  productform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AdminService,
    private router: Router
  ) {
    this.productform = this.fb.group({
      id: ['', Validators.required],
      productName: ['', Validators.required],
      price: ['', Validators.required],
      catageroy: ['', Validators.required],
      details: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.productform = this.fb.group({
      productid: ['', Validators.required],
      pname: ['', Validators.required],
      price: ['', Validators.required],
      catageroy: ['', Validators.required],
      details: ['', Validators.required],
    });
  }
  onsubmit() {
    if (this.productform.valid) {
      const formData = this.productform.value;
      this.service.createprdata(formData).subscribe(
        (response) => {
          console.log('product added  successfully', response);
          this.productform.reset();
          this.router.navigate(['dashboard/products']);
        },
        (error) => {
          console.error('Error adding product', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
