import { Component, OnInit } from '@angular/core';
import { BookshelvesService } from './bookshelves.service';
import { Bookshelf } from '../common/bookshelf.model';

@Component({
  selector: 'app-books-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookshelves: Bookshelf[] = [];

  constructor(private bookshelvesService: BookshelvesService) {}

  getBookshelves(): void {
    this.bookshelvesService
      .getBookshelves()
      .subscribe((bookshelves) => (this.bookshelves = bookshelves));
  }

  ngOnInit(): void {
    this.getBookshelves();
  }
}
