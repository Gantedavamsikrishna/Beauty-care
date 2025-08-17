import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuantityService {
  private quantitySource = new BehaviorSubject<number>(1);

  currentQuantity = this.quantitySource.asObservable();

  constructor() {}

  updateQuantity(newQuantity: number) {
    this.quantitySource.next(newQuantity);
  }

  getQuantity() {
    return this.quantitySource.value;
  }
}
