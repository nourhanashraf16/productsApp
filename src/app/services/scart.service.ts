import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScartService {
  private productList = new BehaviorSubject<any>([]) //products (don't have products)
  private cartItemList :any =[] // empty array
   constructor() { }
  getProducts(){
    return this.productList.asObservable()
  }
  addToCart(product: any) {
    const existingProduct = this.cartItemList.find((item: any) => item.id === product.id);
    console.log(existingProduct)
    if (!existingProduct) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
    }
  }

  removeCartItem(product: any) {
    const index = this.cartItemList.findIndex((a: any) => a.id === product.id);
    // ده معناه ان index موجود
    if (index !== -1) {
      this.cartItemList.splice(index, 1);
    }
    this.productList.next(this.cartItemList);
  }
}
