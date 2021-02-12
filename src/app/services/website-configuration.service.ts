import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { WebsiteConfiguration } from '../models/website-configuration.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebsiteConfigurationService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getOrderedBookshelfIds(): Observable<number[]> {
    return this.getWebsiteConfiguration().pipe(
      map((config) => config.BookshelvesOrdering),
      map((orderingItems) => orderingItems.map((x) => x.bookshelf.id))
    );
  }

  getBookSuggestionFormUrl(): Observable<string> {
    return this.getWebsiteConfiguration().pipe(
      map((config) => config.bookSuggestionFormUrl)
    );
  }

  private getWebsiteConfiguration(): Observable<WebsiteConfiguration> {
    const apiUrl = this.environmentService.getEnvConfig().apiUrl;
    return this.http.get<WebsiteConfiguration>(
      apiUrl + '/website-configuration'
    );
  }
}
