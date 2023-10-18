import { Component } from '@angular/core';
import { ScartService } from 'src/app/services/scart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
totalItems :number = 0
constructor( private serviceCart : ScartService ){
}
ngOnInit(){
this.serviceCart.getProducts().subscribe((res) =>{
  this.totalItems = res.length
  console.log(this.totalItems)
})
}

}
