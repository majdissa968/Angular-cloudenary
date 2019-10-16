import { Component, OnInit } from '@angular/core';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      // console.log(books)
    });
  }

}








