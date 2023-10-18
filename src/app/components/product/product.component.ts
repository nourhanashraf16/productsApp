import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ScartService } from 'src/app/services/scart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   cartproducts :Array<Iproduct>=[]
   addToCartDisabled : boolean =false
  @Input() singleProduct!:Iproduct
  constructor(private cartService :ScartService ){
  }
  ngOnInit(){
    this.cartService.getProducts().subscribe((data =>{
       this.cartproducts = data;
      // console.log(this.cartproducts)
    }))
  }


  handleAddToCart(item:Iproduct){
    this.addToCartDisabled = true;
  this.cartService.addToCart(item)
  }


}
