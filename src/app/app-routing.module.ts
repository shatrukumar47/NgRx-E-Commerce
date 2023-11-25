import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './component/login/login.component';
import { CartComponent } from './component/cart/cart.component';
import { authGuardGuard } from './AuthGuard/auth-guard';

const routes: Routes = [
  {path:"", component: ProductComponent},
  {path:"login", component: LoginComponent},
  {path:"cart", component: CartComponent, canActivate: [authGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
