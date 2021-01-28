import { Component, OnInit } from '@angular/core';
import { BookshelvesService } from '../services/bookshelves.service';
import { Observable } from 'rxjs';
import { BookshelfWithBooks } from '../models/bookshelf-with-books.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookshelves$!: Observable<BookshelfWithBooks[]>;

  constructor(private bookshelvesService: BookshelvesService) {}

  ngOnInit(): void {
    this.bookshelves$ = this.bookshelvesService.getBookshelvesWithBooks();
  }
}
