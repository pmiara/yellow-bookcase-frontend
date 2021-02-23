import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookWithBookshelves } from '../models/book-with-bookshelves.model';
import { BooksService } from '../services/books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId: number;
  book$!: Observable<BookWithBookshelves>;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {
    const bookIdParameter = this.route.snapshot.paramMap.get('id');
    this.bookId = Number(bookIdParameter);
  }

  ngOnInit(): void {
    this.book$ = this.booksService.getBookWithBookshelves(this.bookId);
  }

  getBookshelfNames(book: BookWithBookshelves): string {
    return book.bookshelves.map((bookshelf) => bookshelf.name).join(', ');
  }
}
