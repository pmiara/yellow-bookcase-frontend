import { Injectable } from '@angular/core';
import { Book } from '../common/book.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../common/environment.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {}
  getBooks(): Observable<Book[]> {
    const apiUrl = this.environmentService.getEnvConfig().apiUrl;
    return this.http.get<Book[]>(apiUrl + '/books');
  }
}
