import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { BookWithBookshelves } from '../models/book-with-bookshelves.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getBookWithBookshelves(id: number): Observable<BookWithBookshelves> {
    const apiUrl = this.environmentService.getEnvConfig().apiUrl;
    return this.http.get<BookWithBookshelves>(apiUrl + '/books/' + id);
  }
}
