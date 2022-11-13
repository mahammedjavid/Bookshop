import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  getBooks() {
    return [
    {
      name : "Clean Code",
      author : "Robert C Martin",
      image : "https://m.media-amazon.com/images/I/51b7XbfMIIL._AC_UY327_FMwebp_QL65_.jpg",
      amount : 500
    },
    {
      name : "Zero To Mastery In Python Programming",
      author : "SRINIVAS ARUKONDA",
      image : "https://m.media-amazon.com/images/I/81drimuUhOS._AC_UY327_FMwebp_QL65_.jpg",
      amount : 600
    },
    {
      name : "Programming for Computations",
      author : "Hans Petter Langtangen ",
      image : "https://m.media-amazon.com/images/I/41hjzb5I-nL._AC_UY327_FMwebp_QL65_.jpg",
      amount : 700
    },
    {
      name : "C Programming: Language",
      author : "Darrel L. Graham ",
      image : "https://m.media-amazon.com/images/I/91-l2iv-4hL._AC_UY327_FMwebp_QL65_.jpg",
      amount : 800
    }
  ]
  }

  constructor() { }
}
