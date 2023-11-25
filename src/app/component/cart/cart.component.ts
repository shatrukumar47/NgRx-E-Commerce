import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartData: any[] = [];
  totalPrice: number = 0;

  constructor(private localStorageService: LocalStorageService){}

  ngOnInit(): void {
    const data = this.localStorageService.getItem("cart");
    if(data){
      this.cartData = JSON.parse(data);
    }
    this.calculateTotalPrice();
  }

   //remove cart item
   removeCartItem = (id: number)=>{
    this.cartData = this.cartData.filter((item)=> item.id !== id);
    localStorage.setItem("cart", JSON.stringify(this.cartData))
    this.calculateTotalPrice();
  }

 

  //handle Qunatity
  handleQuantity(event:any, id:number){
      let q = parseInt(event.target.value);
      this.cartData = this.cartData.map((item)=>{
        if(item.id === id){
          return {...item, quantity:q}
        }else{
          return item;
        }
      })
      localStorage.setItem("cart", JSON.stringify(this.cartData))
      this.calculateTotalPrice();
  }

   // calculate subtotal
   calculateTotalPrice(){
    this.totalPrice = 0;
    this.cartData.forEach((item)=>{
      this.totalPrice = this.totalPrice + (item.price * (item.quantity || 1))
    })
  }
}
