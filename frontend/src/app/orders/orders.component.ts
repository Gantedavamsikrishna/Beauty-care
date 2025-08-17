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
  orders: any[] = [];
  constructor(private service: AdminService, private router: Router) {}
  ngOnInit(): void {
    this.getorders(this.orders);
  }

  getorders(order: any) {
    this.service.getallordedata(order).subscribe(
      (res) => {
        console.log('Orders fetched:', res);
        this.orders = res;
      },
      (error) => {
        console.error('Error fetching orders', error);
      }
    );
  }
}
