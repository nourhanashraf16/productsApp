import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList!:Array<Iproduct>
  constructor(private products :ProductsServiceService){
  }
  ngOnInit() {
    this.products.getProducts().subscribe((data) => {
      console.log(data)
      this.productList = data.products;
      console.log(this.productList)
    });

  }
}
