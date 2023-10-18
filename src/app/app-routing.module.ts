import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { CartComponent } from './components/cart/cart.component';
import { authGuardGuard } from './gurds/auth-guard.guard';
const routes: Routes = [
  {path : '' ,
  component:ProductsComponent
},
{path :"register",
  component:RegisterComponent
},
{path:"login",
component : LoginComponent,
},
{path : "cart" ,
component : CartComponent ,
canActivate : [authGuardGuard]},
{path : "productDetails/:id" ,
component : DetailsProductComponent},
{path : "**",
component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

