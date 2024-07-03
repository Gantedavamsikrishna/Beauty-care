import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { retry } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  deletemsg: String = '';
  constructor(private service: AdminService) {}
  ngOnInit(): void {
    this.getallprdata(this.products);
  }
  getallprdata(data: any[]) {
    this.service.getallprdata(data).subscribe(
      (res) => {
        console.log(res, 'data');
        this.products = res;
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
}
