import { Component, OnInit } from '@angular/core';
import { GlobalCartService } from '../global-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:GlobalCartService) { 


  }

  ngOnInit(): void {
  }
  
  get(){
    return this.cartService.getCartItem()
  }


}
