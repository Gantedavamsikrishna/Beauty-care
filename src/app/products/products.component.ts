import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { retry } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  isList: boolean = true;
  isreg: boolean = false;
  products: any[] = [];
  deletemsg: String = '';
  productform: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private service: AdminService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.productform = this.fb.group({
      id: ['', Validators.required],
      productName: ['', Validators.required],
      price: ['', Validators.required],
      catageroy: ['', Validators.required],
      details: ['', Validators.required],
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.productform = this.fb.group({
      productid: ['', Validators.required],
      pname: ['', Validators.required],
      price: ['', Validators.required],
      catageroy: ['', Validators.required],
      details: ['', Validators.required],
    });
    this.getallprdata(this.products);
  }
  onsubmit() {
    if (this.productform.valid) {
      const formData = new FormData();
      formData.append('productid', this.productform.get('productid')?.value);
      formData.append('pname', this.productform.get('pname')?.value);
      formData.append('price', this.productform.get('price')?.value);
      formData.append('catageroy', this.productform.get('catageroy')?.value);
      formData.append('details', this.productform.get('details')?.value);

      if (this.selectedFile) {
        formData.append('file', this.selectedFile);
      }
      this.service.createprdata(formData).subscribe(
        (response) => {
          console.log('product added  successfully', response);
          this.productform.reset();
          this.getallprdata(this.products);
          this.isList = true;
          this.isreg = false;
        },
        (error) => {
          console.error('Error adding product', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  getallprdata(data: any[]) {
    this.service.getallprdata(data).subscribe(
      (res) => {
        console.log(res, 'data');
        this.products = res;
        this.products.forEach((product) => {
          product.imageUrl = this.service.getImageUrl(product.productid);
        });
      },

      (err) => {
        console.log(err);
      }
    );
  }

  delete(productid: any) {
    console.log(productid);
    this.service.deletepr(productid).subscribe((res) => {
      console.log(res);
      this.deletemsg = res;
      this.getallprdata(this.products);
    });
  }
  navigateToAddproduct() {
    this.isList = false;
    this.isreg = true;
  }
}
