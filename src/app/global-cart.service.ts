import { Injectable } from '@angular/core';
import { Book } from './Type/Type';

@Injectable({
  providedIn: 'root'
})
export class GlobalCartService {

  // instead of doing sharing data from child to parent using eventEmitter() we can use services

  
  cart : Book[] = []

  AddcartitemsService(book:Book){
    this.cart.push(book)
    localStorage.setItem("cartItems",JSON.stringify(this.cart))
  }

  getCartItem(){
    return this.cart
  }
  removeCartItemsService(book:Book){
    this.cart = this.cart.filter((x)=>x!=book)
    localStorage.setItem("cartItems",JSON.stringify(this.cart))
  }

  constructor() { }
  
}
