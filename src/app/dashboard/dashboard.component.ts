import { Component, OnInit } from '@angular/core';
import { BookshelvesService } from './bookshelves.service';
import { Bookshelf } from '../common/bookshelf.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookshelves$!: Observable<Bookshelf[]>;

  constructor(private bookshelvesService: BookshelvesService) {}

  ngOnInit(): void {
    this.bookshelves$ = this.bookshelvesService.getBookshelves();
  }
}
