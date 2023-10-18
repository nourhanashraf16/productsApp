import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { ScartService } from 'src/app/services/scart.service';
@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {
   id!:0;
   addToCartDisabled:boolean =false
   cartProducts : any =[]
   product:Iproduct= {
    "id": 0,
    "title": "",
    "description": "",
    "price": 0,
    "discountPercentage": 0,
    "rating":0,
    "stock": 0,
    "brand": "",
    "category": "",
    "thumbnail": "",
    "images": [],
    "createdAt": "",
}
  constructor(private activatedRoute : ActivatedRoute , private productService :ProductsServiceService ,private serviceCart : ScartService ){}
  ngOnInit(){
    console.log(this.activatedRoute.snapshot.params['id'])
    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id)
    this.productService.getProductDetails(this.id).subscribe((data) => {
      this.product = data;
      console.log( this.product)})
    this.serviceCart.getProducts().subscribe((res)=>{
      this.cartProducts = res;
      console.log(this.cartProducts )
    })
  }
  handleAddToCart(product:Iproduct){
    this.addToCartDisabled=true;
    const productExists = this.cartProducts.some((ele:Iproduct) => {
      return ele.id === product.id;
    });
    if(productExists){
      console.log("mai")
      this.addToCartDisabled=true;
    }else{
      console.log("mourr")
      this.serviceCart.addToCart(product)
    }
  }
}
