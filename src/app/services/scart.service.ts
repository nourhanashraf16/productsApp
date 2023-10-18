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
  addToCart(product:any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
  }
  // removeCartItem(product:any){
  //   this.cartItemList.filter((a:any)=> a.id!==product.id )
  //   this.productList.next(this.cartItemList)
  // }
}
