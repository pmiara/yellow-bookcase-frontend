import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { WebsiteConfiguration } from '../models/website-configuration.model';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { BookshelfWithBooks } from '../models/bookshelf-with-books.model';

@Injectable({
  providedIn: 'root'
})
export class BookshelvesService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getBookshelvesWithBooks(): Observable<BookshelfWithBooks[]> {
    const apiUrl = this.environmentService.getEnvConfig().apiUrl;
    const bookshelfIdsOrdered = this.http
      .get<WebsiteConfiguration>(apiUrl + '/website-configuration')
      .pipe(
        map((config) => config.BookshelvesOrdering),
        map((orderingItems) => orderingItems.map((x) => x.bookshelf.id))
      );

    return combineLatest([
      bookshelfIdsOrdered,
      this.http.get<BookshelfWithBooks[]>(apiUrl + '/bookshelves')
    ]).pipe(
      map(([ids, bookshelves]) =>
        ids
          .map((id) => bookshelves.find((bookshelf) => id === bookshelf.id))
          .filter((x): x is BookshelfWithBooks => x !== undefined)
          .filter((bookshelf) => bookshelf.books.length > 0)
      )
    );
  }
}
