import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { BookshelfWithBooks } from '../models/bookshelf-with-books.model';
import { WebsiteConfigurationService } from './website-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class BookshelvesService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService,
    private configService: WebsiteConfigurationService
  ) {}

  getBookshelvesWithBooks(): Observable<BookshelfWithBooks[]> {
    const apiUrl = this.environmentService.getEnvConfig().apiUrl;
    const bookshelfIdsOrdered = this.configService.getOrderedBookshelfIds();

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
