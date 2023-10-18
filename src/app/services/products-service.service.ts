import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor( private http : HttpClient ) { }
  getProducts (){
    return this.http.get<{products : Array<Iproduct> , limit :0 , skip : 0 , total :0 }>("https://dummyjson.com/products")
  }
  getProductDetails(iddd:number){
    return this.http.get<Iproduct>(`https://dummyjson.com/products/${iddd}`)
  }
}
