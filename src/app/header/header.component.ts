import { Component } from '@angular/core';
import { NavigationService } from '../common/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Żółta Biblioteczka';

  constructor(private navService: NavigationService) {}

  openSidenav(): void {
    this.navService.openSidenav();
  }
}
