import { Injectable } from '@angular/core';
import { Bookshelf } from '../common/bookshelf.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../common/environment.service';
import { WebsiteConfiguration } from '../common/website-configuration.model';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookshelvesService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getBookshelves(): Observable<Bookshelf[]> {
    const apiUrl = this.environmentService.getEnvConfig().apiUrl;
    const bookshelfIdsOrdered = this.http
      .get<WebsiteConfiguration>(apiUrl + '/website-configuration')
      .pipe(
        map((config) => config.BookshelvesOrdering),
        map((orderingItems) => orderingItems.map((x) => x.bookshelf.id))
      );

    return combineLatest([
      bookshelfIdsOrdered,
      this.http.get<Bookshelf[]>(apiUrl + '/bookshelves')
    ]).pipe(
      map(([ids, bookshelves]) =>
        ids
          .map((id) => bookshelves.find((bookshelf) => id === bookshelf.id))
          .filter((x): x is Bookshelf => x !== undefined)
          .filter((bookshelf) => bookshelf.books.length > 0)
      )
    );
  }
}
