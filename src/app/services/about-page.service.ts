import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { AboutPage } from '../models/about-page.model';

@Injectable({
  providedIn: 'root'
})
export class AboutPageService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getTitleAndContent(): Observable<AboutPage> {
    const apiUrl = this.environmentService.getEnvConfig().apiUrl;
    return this.http.get<AboutPage>(apiUrl + '/o-biblioteczce/');
  }
}
