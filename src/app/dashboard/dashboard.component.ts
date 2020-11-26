import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from '../common/book.model';

@Component({
  selector: 'app-books-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  getBooks(): void {
    this.booksService.getBooks().subscribe((books) => (this.books = books));
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
