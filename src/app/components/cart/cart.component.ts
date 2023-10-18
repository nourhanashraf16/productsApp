import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ScartService } from 'src/app/services/scart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts :Array<any> =[]
  updateproducts :any =[]
  constructor( private serviceCart : ScartService){
  }
  ngOnInit(){
  this.serviceCart.getProducts().subscribe((res) =>{
    this.cartProducts = res;
    this.cartProducts.forEach((a:Iproduct)=>{
      Object.assign(a,{quantity : 1 ,totalPrice : a.price })
    })
    console.log(this.cartProducts)
  })

  }
  increaseQuantity(item : any){
    item.quantity++
  }
  decreaseQuantity(item :any){
    if(item.quantity <= 1)
    {
           item.quantity = 1
    }else{
      item.quantity--
    }
  }
  // removeItem(product:any){
  //   this.serviceCart.removeCartItem(product)
  //   this.updateproducts = this.serviceCart.removeCartItem(product)
  //   console.log(  this.updateproducts)
  //   }
}
