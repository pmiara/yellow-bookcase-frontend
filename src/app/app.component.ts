import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { NavigationService } from './common/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSidenav!: Observable<boolean>;

  constructor(
    private titleService: Title,
    private navService: NavigationService
  ) {}

  ngOnInit(): void {
    this.showSidenav = this.navService.getShowSidenav();
    this.titleService.setTitle('Żółta Biblioteczka');
  }

  closeSidenav(): void {
    this.navService.closeSidenav();
  }
}
