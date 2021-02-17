import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { NavigationService } from './services/navigation.service';
import { Router, NavigationEnd } from '@angular/router';
import { WebsiteConfigurationService } from './services/website-configuration.service';

// eslint-disable-next-line @typescript-eslint/ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSidenav!: Observable<boolean>;
  bookSuggestionFormUrl$!: Observable<string>;

  constructor(
    private titleService: Title,
    private navService: NavigationService,
    private router: Router,
    private configService: WebsiteConfigurationService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-VFT8FMN4TP', {
          page_path: event.urlAfterRedirects
        });
      }
      this.navService.closeSidenav();
    });
    this.bookSuggestionFormUrl$ = this.configService.getBookSuggestionFormUrl();
  }

  ngOnInit(): void {
    this.showSidenav = this.navService.getShowSidenav();
    this.titleService.setTitle('Żółta Biblioteczka');
  }

  closeSidenav(): void {
    this.navService.closeSidenav();
  }
}
