import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { NavigationService } from './services/navigation.service';
import { Router } from '@angular/router';
import { WebsiteConfigurationService } from './services/website-configuration.service';

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
    this.router.events.subscribe(() => {
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
