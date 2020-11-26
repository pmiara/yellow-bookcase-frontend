import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Book } from '../common/book.model';
import { BooksService } from './books.service';
import { of } from 'rxjs';
import { CoverImgFullUrlPipe } from './cover-img-full-url.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

describe('BooksDashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let booksServiceSpy: jasmine.SpyObj<BooksService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BooksService', ['getBooks']);
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, CoverImgFullUrlPipe],
      imports: [HttpClientTestingModule, MatCardModule, MatButtonModule],
      providers: [{ provide: BooksService, useValue: spy }]
    }).compileComponents();
    booksServiceSpy = TestBed.inject(BooksService) as jasmine.SpyObj<
      BooksService
    >;
  });

  it('should create', () => {
    const books: Book[] = [
      {
        title: 'Title 1',
        author: 'John Doe',
        description: 'First description',
        coverImg: {
          name: 'photo.jpg',
          url: 'foo.com/photo.jpg',
          provider: 'foo'
        }
      },
      {
        title: 'Title 2',
        author: 'Julia Smith',
        description: 'Second description',
        coverImg: {
          name: 'photo2.jpg',
          url: 'foo.com/photo2.jpg',
          provider: 'foo'
        }
      }
    ];
    booksServiceSpy.getBooks.and.returnValue(of(books));
    fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('mat-card');

    expect(cards.length).toBe(books.length);
    for (let i = 0; i < books.length; i++) {
      const title = cards[i].querySelector('mat-card-title').innerText;
      const author = cards[i].querySelector('mat-card-subtitle').innerText;
      const description = cards[i].querySelector('mat-card-content').innerText;
      expect(title).toEqual(books[i].title);
      expect(author).toEqual(books[i].author);
      expect(description).toEqual(books[i].description);
    }
  });
});
