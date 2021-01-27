import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../common/navigation.service';
import { BookshelvesService } from '../dashboard/bookshelves.service';
import { Observable } from 'rxjs';
import { Bookshelf } from '../common/bookshelf.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Żółta Biblioteczka';
  bookshelves$!: Observable<Bookshelf[]>;

  constructor(
    private navService: NavigationService,
    private bookshelvesService: BookshelvesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookshelves$ = this.bookshelvesService.getBookshelves();
  }

  openSidenav(): void {
    this.navService.openSidenav();
  }

  onBookshelfListMenuClick(bookshelf: Bookshelf): void {
    if (this.isHomepage()) {
      HeaderComponent.tryScrollToBookshelf(bookshelf);
    } else {
      this.navigateToHomepage().then(() => {
        this.scrollAfterBookshelfIsCreated(bookshelf);
      });
    }
  }

  private isHomepage(): boolean {
    return this.router.url === '/';
  }

  private navigateToHomepage(): Promise<boolean> {
    return this.router.navigateByUrl('/');
  }

  private scrollAfterBookshelfIsCreated(bookshelf: Bookshelf): void {
    const mutationObserver = new MutationObserver((_, observer) => {
      if (HeaderComponent.tryScrollToBookshelf(bookshelf)) {
        // stop observing after a successful scroll
        observer.disconnect();
      }
    });
    mutationObserver.observe(document.body, {
      attributes: true,
      childList: true,
      characterData: true
    });
  }

  private static tryScrollToBookshelf(bookshelf: Bookshelf): boolean {
    const bookshelfDiv = document.querySelector('#' + bookshelf.name);
    if (bookshelfDiv) {
      bookshelfDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return true;
    } else {
      return false;
    }
  }
}
