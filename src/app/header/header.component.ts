import { Component } from '@angular/core';
import { NavigationService } from '../common/navigation.service';
import { BookshelvesService } from '../dashboard/bookshelves.service';
import { Observable } from 'rxjs';
import { Bookshelf } from '../common/bookshelf.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Żółta Biblioteczka';
  bookshelves$!: Observable<Bookshelf[]>;

  constructor(
    private navService: NavigationService,
    private bookshelvesService: BookshelvesService
  ) {}

  openSidenav(): void {
    this.navService.openSidenav();
  }

  onBookshelfListMenuClick(bookshelf: Bookshelf): void {
    const element = document.querySelector('#' + bookshelf.name);
    if (element)
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  ngOnInit(): void {
    this.bookshelves$ = this.bookshelvesService.getBookshelves();
  }
}
