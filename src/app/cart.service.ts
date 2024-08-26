import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartitems = new BehaviorSubject<any[]>([]);
  currentcartitems = this.cartitems.asObservable();

  constructor() {}

  addcart(product: any) {
    const items = this.cartitems.getValue();
    const exsitingitem = items.find((item) => item.id === product.id);

    if (exsitingitem) {
      exsitingitem.quantity += 1;
    } else {
      product.quantity = 1;
      items.push(product);
    }
    this.cartitems.next(items);
  }
  getcartitems() {
    return this.cartitems;
  }
  clearcartitems() {
    this.cartitems.next([]);
  }
}
