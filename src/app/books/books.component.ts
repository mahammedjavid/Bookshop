import { Component, OnInit } from '@angular/core';
import { Book } from '../Type/Type';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books:Book[] = []
  
  constructor(private booksService:BooksService) {      //service is in global : to add service to only books, create books module and in Providers put this service
    this.books = this.booksService.getBooks()  // same can be used in ngOnInit
  }


  // cart : Book[] = []  // initialized this in cart service


  ngOnInit(): void {
  }


}
