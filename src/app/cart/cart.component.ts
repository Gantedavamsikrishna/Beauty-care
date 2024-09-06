import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartitems: any[] = [];
  constructor(private cservice: CartService) {}
  ngOnInit(): void {
    this.cservice.getcartitems().subscribe((items) => {
      this.cartitems = items;
    });
  }
}
