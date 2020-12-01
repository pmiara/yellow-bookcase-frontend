import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookshelvesService } from './bookshelves.service';
import { of } from 'rxjs';
import { CoverImgFullUrlPipe } from './cover-img-full-url.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Bookshelf } from '../common/bookshelf.model';

describe('BooksDashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let bookshelvesServiceSpy: jasmine.SpyObj<BookshelvesService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BookshelfService', ['getBookshelves']);
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, CoverImgFullUrlPipe],
      imports: [HttpClientTestingModule, MatCardModule, MatButtonModule],
      providers: [{ provide: BookshelvesService, useValue: spy }]
    }).compileComponents();
    bookshelvesServiceSpy = TestBed.inject(
      BookshelvesService
    ) as jasmine.SpyObj<BookshelvesService>;
  });

  it('should create', () => {
    const bookshelves: Bookshelf[] = [
      {
        id: 1,
        name: 'First bookshelf',
        books: [
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
        ]
      },
      {
        id: 2,
        name: 'Second bookshelf',
        books: [
          {
            title: 'Third Title',
            author: 'John Doe',
            description: 'Third description',
            coverImg: {
              name: 'photo.jpg',
              url: 'http://localhost/photo3.jpg',
              provider: 'local'
            }
          }
        ]
      }
    ];
    bookshelvesServiceSpy.getBookshelves.and.returnValue(of(bookshelves));
    fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const bookshelvesDivs = fixture.nativeElement.querySelectorAll(
      '.bookshelf'
    );

    expect(bookshelvesDivs.length).toBe(bookshelves.length);
    for (let i = 0; i < bookshelves.length; i++) {
      const books = bookshelves[i].books;
      const bookDivs = bookshelvesDivs[i].querySelectorAll('mat-card');
      expect(bookshelvesDivs[i].querySelector('h3').innerText).toEqual(
        bookshelves[i].name
      );
      for (let j = 0; j < books.length; j++) {
        const title = bookDivs[j].querySelector('mat-card-title').innerText;
        const author = bookDivs[j].querySelector('mat-card-subtitle').innerText;
        const description = bookDivs[j].querySelector('mat-card-content')
          .innerText;
        expect(title).toEqual(books[j].title);
        expect(author).toEqual(books[j].author);
        expect(description).toEqual(books[j].description);
      }
    }
  });
});
