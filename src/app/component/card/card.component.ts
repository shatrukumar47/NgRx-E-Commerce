import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item:any = {};

  constructor(){}

  handleAddToCart(){
    let cartData: any = localStorage.getItem('cart') || [];
    if (cartData.length === 0) {
      cartData.unshift({...this.item, quantity:1});
      alert('Added into Cart🛒');
      localStorage.setItem('cart', JSON.stringify(cartData));
    } else {
      cartData = JSON.parse(cartData);
      if (this.checkDuplicate(cartData, this.item)) {
        alert('⚠ Already added!!');
      } else {
        cartData.unshift({...this.item, quantity:1});
        alert('Added into Cart🛒');
        localStorage.setItem('cart', JSON.stringify(cartData));
      }
    }
  }

  //check Duplication
  checkDuplicate(data:any, product: any): boolean {
    for (let item of data) {
      if (item.id === product.id) {
        return true;
      }
    }
    return false;
  }
}
