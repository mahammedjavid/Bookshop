import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { GlobalCartService } from '../global-cart.service';
import { Book } from '../Type/Type';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book:Book = {} as Book;
  // @Output() AddToCartemit = new EventEmitter()  // instead of this we are using servises

  isInCart:boolean = false;


  constructor(private cartService:GlobalCartService, private authservice:AuthService) { 

  }

  ngOnInit(): void {
  }

  AddtoCart(){

    this.isInCart = true
    this.cartService.AddcartitemsService(this.book)
    // this.AddToCartemit.emit(this.book)
  }
  removeFromCart(){
    this.isInCart = false
    this.cartService.removeCartItemsService(this.book)
  }
  getAuth(){
    return this.authservice.isAuthenticated
  }
  OutsideAddtoCart(){
    alert("Login and Try again")
  }



}
